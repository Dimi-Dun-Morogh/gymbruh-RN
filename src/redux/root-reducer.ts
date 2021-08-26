import {combineReducers} from '@reduxjs/toolkit';
import exerciseReducer from './exercises/exercise.reducer';

const rootReducer = combineReducers({
  exercisesState: exerciseReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
