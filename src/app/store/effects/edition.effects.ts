import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { InformationMapService } from '../../global/services/information-map.service';
import {
  documentationsReceived,
  editionByRouteParamsLoaded,
  loadEditionByRouteParams,
  loadInformationMaps,
  loadTreeDocumentations,
  updateCurrentDocumentation
} from '../actions/edition.actions';
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { InformationMap } from '../../classes/information-map';
import { select, Store } from '@ngrx/store';
import { selectInformationMaps } from '../selectors/edition.selectors';
import { of } from 'rxjs';
import { DocumentationService } from '../../global/services/documentation.service';
import { Documentation } from '../../classes/documentation';

@Injectable({ providedIn: 'root'})
export class EditionEffects {

  constructor(private actions$: Actions,
              private readonly store: Store,
              private readonly informationMapService: InformationMapService,
              private readonly docService: DocumentationService,
              private readonly router: Router) {
  }

  loadEditionByRouteParams$ = createEffect(() => this.actions$.pipe(
    ofType(loadEditionByRouteParams),
    withLatestFrom(this.store.pipe(select(selectInformationMaps))),
    mergeMap(([{ editionRouteParams }, informationMaps]) => {
      return (informationMaps?.length ? of(informationMaps) : this.informationMapService.getIMOfVersion(1)).pipe(
        tap((ims: InformationMap[]) => this.store.dispatch(loadInformationMaps({ informationMaps: ims }))),
        switchMap(() => {
          return editionRouteParams.documentationId ? this.docService.getDocumentation(editionRouteParams.documentationId, true) : of(undefined)
        }),
        tap((documentation: Documentation | undefined) => {
          this.store.dispatch(updateCurrentDocumentation({ documentation }));
        }),
        map(() => editionByRouteParamsLoaded())
      )
    })
  ));

  loadDocumentations$ = createEffect(() => this.actions$.pipe(
    ofType(loadTreeDocumentations),
    switchMap(({ informationMapId }) => this.docService.getTree(informationMapId, undefined, 2)),
    map((documentation: Documentation) => documentationsReceived({ documentations: [documentation] }))
  ));

}
