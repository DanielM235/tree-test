import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TreeState } from '../reducers/tree.reducer';

export const selectTreeState = createFeatureSelector<TreeState>('tree');

export const selectActiveImId = createSelector(
  selectTreeState,
  (state: TreeState): number | undefined => state.activeImId
);
export const selectSelectedNodeId = createSelector(
  selectTreeState,
  (state: TreeState) => state.selectedNodeId
);

export const selectNodeDetails = createSelector(
  selectTreeState,
  (state: TreeState) => state.nodeDetails
);

export const selectError = createSelector(
  selectTreeState,
  (state: TreeState) => state.error
);
