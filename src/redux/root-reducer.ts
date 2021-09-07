import {combineReducers} from '@reduxjs/toolkit';
import exerciseReducer from './exercises/exercise.reducer';
import RoutineReducer from './routines/routine.reducer';

const rootReducer = combineReducers({
  exercisesState: exerciseReducer,
  routinesState: RoutineReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
