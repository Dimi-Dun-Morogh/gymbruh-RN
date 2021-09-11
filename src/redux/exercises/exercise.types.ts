import {IAction} from '../store';
import {WorkOutSet} from '../workout/workout.types';

export enum exerciseActionTypes {
  CREATE_EXERCISE = 'CREATE_EXERCISE',
  UPDATE_EXERCISE = 'UPDATE_EXERCISE',
  EDIT_EXERCISE = 'EDIT_EXERCISE',
  DELETE_EXERCISE = 'DELETE_EXERCISE',
}

export type Exercise = {
  id: string;
  name: string;
  lastDate: string;
  lastReps: number;
  lastWeight: number;
  allSets: number;
  recordReps: {
    reps: number;
    weight: number;
    date: string | null;
  };
  recordWeight: {
    reps: number;
    weight: number;
    date: string | null;
  };
};

type CreateExercise = IAction<exerciseActionTypes.CREATE_EXERCISE, Exercise>;
type UpdateExercise = IAction<exerciseActionTypes.UPDATE_EXERCISE, WorkOutSet>;
type EditExercise = IAction<exerciseActionTypes.EDIT_EXERCISE, Exercise>;
type DeleteExercise = IAction<exerciseActionTypes.DELETE_EXERCISE, string>;

export type ExerciseActions =
  | CreateExercise
  | UpdateExercise
  | EditExercise
  | DeleteExercise;
