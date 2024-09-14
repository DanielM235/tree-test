import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';
import { Account } from '../../auth/account';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAccount = createSelector(
  selectAuthState,
  (state: AuthState): Account | null => state.user
);
