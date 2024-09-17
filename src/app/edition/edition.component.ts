import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { InformationMap } from '../classes/information-map';
import { selectActiveImId } from '../store/selectors/tree.selectors';
import { switchMap, tap } from 'rxjs/operators';
import { combineLatest, Subscription } from 'rxjs';
import { unsubscribe } from '../global/utils/rxjs.utils';
import { updateActiveImId } from '../store/actions/tree.actions';
import { selectInformationMaps } from '../store/selectors/edition.selectors';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.less']
})
export class EditionComponent implements OnDestroy {
  activeImId: number | undefined;
  informationMaps: InformationMap[] = [];

  subs: Subscription[] = [];

  constructor(private readonly store: Store) {
    combineLatest([
      store.select(selectActiveImId),
      store.select(selectInformationMaps)
    ]).pipe(
      tap(([activeImId, informationMaps]) => {
        this.activeImId = activeImId;
        this.informationMaps = informationMaps;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  updateActiveIm(activeImId: number | undefined): void {
      this.store.dispatch(updateActiveImId({ activeImId }));
  }
}
