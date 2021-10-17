import {IAction} from '../store';
import {InitialRoutineState} from './routine.reducer';

export enum routineActionTypes {
  CREATE_ROUTINE = 'CREATE_ROUTINE',
  DELETE_ROUTINE = 'DELETE_ROUTINE',
  EDIT_ROUTINE = 'EDIT_ROUTINE',
  BACKUP_ROUTINE = 'BACKUP_ROUTINE',
  GLOBAL_EXERCISE_DELETION = 'GLOBAL_EXERCISE_DELETION',
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
type GlobalExercDeletion = IAction<
  routineActionTypes.GLOBAL_EXERCISE_DELETION,
  string
>;

export type RoutineActions =
  | CreateRoutine
  | DeleteRoutine
  | EditRoutine
  | BackUpRoutine
  | GlobalExercDeletion;
