import {IAction} from '../store';

export enum routineActionTypes {
  CREATE_ROUTINE = 'CREATE_ROUTINE',
  DELETE_ROUTINE = 'DELETE_ROUTINE',
}

export type Routine = {
  id: string;
  name: string;
  exercises: string[];
};

type CreateRoutine = IAction<routineActionTypes.CREATE_ROUTINE, Routine>;
type DeleteRoutine = IAction<routineActionTypes.DELETE_ROUTINE, string>;

export type RoutineActions = CreateRoutine | DeleteRoutine;
