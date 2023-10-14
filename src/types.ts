// src/types.ts
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ReduxState = {
  isFetching: boolean,
  imageURL: string,
  errorMessage: string,
};

export type ContadorState = {
  count: 0, clicks: 0,
};

export type OverAllState = {
  counterReducer: ContadorState,
  dogReducer: ReduxState,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
