import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EditionState } from '../../store/reducers/edition.reducer';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadEditionByRouteParams } from '../../store/actions/edition.actions';
import { selectEditionState } from '../../store/selectors/edition.selectors';


@Injectable()
export class EditionStateResolver implements Resolve<boolean> {
  constructor(private readonly store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const documentationId = route.params['docId'];
    this.store.dispatch(loadEditionByRouteParams({ editionRouteParams: { documentationId } }));
    console.log('in edition resolver')

    return of(true);
  }
}
