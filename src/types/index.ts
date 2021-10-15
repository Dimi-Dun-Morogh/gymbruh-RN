import {InitialStateType as SettingsState} from '../redux/appSettings/appSettings.reducer';
import {InitialExerState} from '../redux/exercises/exercise.reducer';
import {INITIAL_STATE_TYPE as HistoryState} from '../redux/history/history.reducer';
import {InitialRoutineState as RoutinesState} from '../redux/routines/routine.reducer';

export type BackUpData = {
  settings: SettingsState;
  exercises: InitialExerState;
  history: HistoryState;
  routines: RoutinesState;
};
