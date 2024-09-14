import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { Account } from '../../auth/account';

export interface AuthState {
  user: Account | null;
  error: any | null;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AuthActions.logout, state => ({
    ...state,
    user: null,
    error: null,
  }))
);
