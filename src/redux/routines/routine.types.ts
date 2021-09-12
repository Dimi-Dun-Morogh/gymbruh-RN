import {IAction} from '../store';

export enum routineActionTypes {
  CREATE_ROUTINE = 'CREATE_ROUTINE',
  DELETE_ROUTINE = 'DELETE_ROUTINE',
  EDIT_ROUTINE = 'EDIT_ROUTINE',
}

export type Routine = {
  id: string;
  name: string;
  exercises: string[];
  allCount: number;
  lastDate: number;
};

type CreateRoutine = IAction<routineActionTypes.CREATE_ROUTINE, Routine>;
type DeleteRoutine = IAction<routineActionTypes.DELETE_ROUTINE, string>;
type EditRoutine = IAction<routineActionTypes.EDIT_ROUTINE, Routine>;

export type RoutineActions = CreateRoutine | DeleteRoutine | EditRoutine;
