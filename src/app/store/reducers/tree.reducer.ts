import { createReducer, on } from '@ngrx/store';
import * as TreeActions from '../actions/tree.actions';
import { InformationMap } from '../../classes/information-map';

export interface TreeState {
  informationMaps: InformationMap[];
  activeImId: number | undefined;
  selectedNodeId: number | null;
  nodeDetails: any;
  error: any;
}

export const initialState: TreeState = {
  informationMaps: [],
  activeImId: 0,
  selectedNodeId: null,
  nodeDetails: null,
  error: null,
};

export const treeReducer = createReducer(
  initialState,
  on(TreeActions.updateInformationMaps, (state, { informationMaps }) => ({
    ...state,
    informationMaps,
  })),
  on(TreeActions.updateActiveImId, (state, { activeImId }) => ({
    ...state,
    activeImId,
  })),
  on(TreeActions.selectNode, (state, { nodeId }) => ({
    ...state,
    selectedNodeId: nodeId,
  })),
  on(TreeActions.loadNodeDetailsSuccess, (state, { nodeDetails }) => ({
    ...state,
    nodeDetails,
    error: null,
  })),
  on(TreeActions.loadNodeDetailsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
