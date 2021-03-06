import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import exerciseReducer from './exercises/exercise.reducer';
import HistoryReducer from './history/history.reducer';
import RoutineReducer from './routines/routine.reducer';
import WorkOutReducer from './workout/workout.reducer';
import {persistReducer} from 'redux-persist';
import AppSettingsReducer from './appSettings/appSettings.reducer';

const persistConfig = {
  key: 'rootGymBruh',
  storage: AsyncStorage,
  whitelist: [
    'historyState',
    'exercisesState',
    'routinesState',
    'appSettingsState',
  ],
};

const rootReducer = combineReducers({
  exercisesState: exerciseReducer,
  routinesState: RoutineReducer,
  workOutState: WorkOutReducer,
  historyState: HistoryReducer,
  appSettingsState: AppSettingsReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
