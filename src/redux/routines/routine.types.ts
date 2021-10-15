import {IAction} from '../store';
import {InitialRoutineState} from './routine.reducer';

export enum routineActionTypes {
  CREATE_ROUTINE = 'CREATE_ROUTINE',
  DELETE_ROUTINE = 'DELETE_ROUTINE',
  EDIT_ROUTINE = 'EDIT_ROUTINE',
  BACKUP_ROUTINE = 'BACKUP_ROUTINE',
}

export type Routine = {
  id: string;
  name: string;
  exercises: string[];
  allCount: number;
  lastDate: string;
};

type CreateRoutine = IAction<routineActionTypes.CREATE_ROUTINE, Routine>;
type DeleteRoutine = IAction<routineActionTypes.DELETE_ROUTINE, string>;
type EditRoutine = IAction<routineActionTypes.EDIT_ROUTINE, Routine>;
type BackUpRoutine = IAction<
  routineActionTypes.BACKUP_ROUTINE,
  InitialRoutineState
>;

export type RoutineActions =
  | CreateRoutine
  | DeleteRoutine
  | EditRoutine
  | BackUpRoutine;
