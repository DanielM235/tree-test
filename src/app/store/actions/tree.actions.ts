import { createAction, props } from '@ngrx/store';
import { Documentation } from '../../classes/documentation';
import { InformationMap } from '../../classes/information-map';

export const updateInformationMaps = createAction(
  '[Tree] Update InformationMaps',
  props<{ informationMaps: InformationMap[] }>()
);

export const updateActiveImId = createAction(
  '[Tree] Change active IM',
  props<{ activeImId: number | undefined }>()
);

export const selectNode = createAction(
  '[Tree] Select Node',
  props<{ nodeId: number }>()
);

export const loadNodeDetails = createAction(
  '[Tree] Load Node Details',
  props<{ nodeId: number }>()
);

export const loadNodeDetailsSuccess = createAction(
  '[Tree] Load Node Details Success',
  props<{ nodeDetails: Documentation }>()
);

export const loadNodeDetailsFailure = createAction(
  '[Tree] Load Node Details Failure',
  props<{ error: any }>()
);
