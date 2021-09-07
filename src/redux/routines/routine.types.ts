import {IAction} from '../store';

export enum routineActionTypes {
  CREATE_ROUTINE = 'CREATE_ROUTINE',
}

export type Routine = {
  id: string;
  name: string;
  exercises: string[];
};

type CreateRoutine = IAction<routineActionTypes.CREATE_ROUTINE, Routine>;

export type RoutineActions = CreateRoutine;
