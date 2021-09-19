import {IAction} from '../store';

export type WorkOutSet = {
  reps: number;
  weight: number;
  id: string;
  exerciseId: string;
  date: string;
  exerciseName: string;
};

export enum WorkOutActionTypes {
  ADD_SETS = 'ADD_SETS',
  DELETE_SET = 'DELETE_SET',
  START_WORKOUT = 'START_WORKOUT',
  FINISH_WORKOUT = 'FINISH_WORKOUT',
}

type addNewSet = IAction<WorkOutActionTypes.ADD_SETS, WorkOutSet>;
type deleteSet = IAction<WorkOutActionTypes.DELETE_SET, string>;
type startWorkOut = IAction<WorkOutActionTypes.START_WORKOUT, string>;
type finishWorkOut = IAction<WorkOutActionTypes.FINISH_WORKOUT, undefined>;

export type WorkOutActions =
  | addNewSet
  | deleteSet
  | startWorkOut
  | finishWorkOut;
