import { Documentation } from '../../classes/documentation';
import { InformationMap } from '../../classes/information-map';
import { createReducer, on } from '@ngrx/store';
import {
  documentationsReceived,
  editionLoaded,
  loadEditionByRouteParams,
  loadInformationMaps
} from '../actions/edition.actions';

export interface EditionState {
  documentation: Documentation | undefined;
  documentations: Documentation[];
  informationMaps: InformationMap[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EditionState = {
  documentation: undefined,
  documentations: [],
  informationMaps: [],
  isLoading: false,
  error: null
};

export const editionReducer = createReducer(
  initialState,
  on(loadEditionByRouteParams, (state, { editionRouteParams }) => (
    {
      ...state,
      isLoading: true
    })
  ),
  on(loadInformationMaps, (state, { informationMaps }) => ({
    ...state,
    informationMaps,
    isLoading: false,
    error: null
  })),
  on(editionLoaded, (state, { editionContext }) => ({
    ...state,
    documentation: editionContext.documentation,
    informationMaps: editionContext.informationMaps,
    isLoading: false,
    error: null
  })),
  on(documentationsReceived, (state, { documentations }) => ({
    ...state,
    documentations,
    isLoading: false,
    error: null
  }))
);
