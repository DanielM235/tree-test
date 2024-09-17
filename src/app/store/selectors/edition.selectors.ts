import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditionState } from '../reducers/edition.reducer';
import { InformationMap } from '../../classes/information-map';
import { Documentation } from '../../classes/documentation';

export const selectEditionState = createFeatureSelector<EditionState>('edition');

export const selectInformationMaps = createSelector(
  selectEditionState,
  (editionState: EditionState): InformationMap[] => editionState.informationMaps
);

export const selectDocumentation = createSelector(
  selectEditionState,
  (editionState: EditionState): Documentation | undefined => editionState.documentation
);

export const selectDocumentations = createSelector(
  selectEditionState,
  (editionState: EditionState): Documentation[] => editionState.documentations
);
