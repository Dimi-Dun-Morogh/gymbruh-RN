import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

export interface IAction<T, P> {
  readonly type: T;
  readonly payload?: P;
}
export const store = configureStore({
  reducer: rootReducer,
});
