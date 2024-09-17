import { createAction, props } from '@ngrx/store';
import { InformationMap } from '../../classes/information-map';
import { Documentation } from '../../classes/documentation';


export const loadEditionByRouteParams = createAction(
  '[Edition] Load Edition By Route Params',
  props<{ editionRouteParams: { documentationId: number | undefined }}>()
);

export const editionByRouteParamsLoaded = createAction(
  '[Edition] Edition By Route Params was loaded'
);

export const loadDocumentation = createAction(
  '[EDITION] Edition Load documentation',
  props<{ documentationId: number | undefined}>()
);

export const loadTreeDocumentations = createAction(
  '[EDITION] Edition Load Tree documentations',
  props<{ informationMapId: number | undefined}>()
);

export const documentationsReceived = createAction(
  '[EDITION] Edition documentations received',
  props<{ documentations: Documentation[] }>()
);

export const editionLoaded = createAction(
  '[Edition] Edition Loaded',
  props<{ editionContext: { documentation: Documentation | undefined, informationMaps: InformationMap[] }}>()
);

export const loadInformationMaps = createAction(
  '[EDITION] Load information maps',
  props<{ informationMaps: InformationMap[]}>()
);

export const updateCurrentDocumentation = createAction(
  '[EDITION] Update Active Documentation',
  props<{ documentation: Documentation | undefined }>()
);
