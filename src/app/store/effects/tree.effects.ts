import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as TreeActions from '../actions/tree.actions';
import { DocumentationService } from '../../global/services/documentation.service';
import { updateActiveImId } from '../actions/tree.actions';
import { loadTreeDocumentations } from '../actions/edition.actions';

@Injectable({ providedIn: 'root' })
export class TreeEffects {
  constructor(private readonly actions$: Actions, private readonly documentationService: DocumentationService) {
  }

  updateActiveImId = createEffect(() => this.actions$.pipe(
    ofType(updateActiveImId),
    map(({ activeImId }) => loadTreeDocumentations({ informationMapId: activeImId }))
  ));

  loadNodeDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreeActions.selectNode),
      mergeMap(action =>
        this.documentationService.getDocumentation(action.nodeId, true).pipe(
          map(nodeDetails => TreeActions.loadNodeDetailsSuccess({ nodeDetails })),
          catchError(error => of(TreeActions.loadNodeDetailsFailure({ error })))
        )
      )
    )
  );
}
