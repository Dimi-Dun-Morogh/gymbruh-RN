import {IAction} from '../store';

export enum exerciseActionTypes {
  CREATE_EXERCISE = 'CREATE_EXERCISE',
}

export type Exercise = {
  id: string;
  name: string;
  lastDate: string | null;
  lastReps: number;
  lastWeight: number | null;
  allSets: number | null;
  recordReps: {
    reps: number;
    weight: number | null;
  };
  recordWeight: {
    reps: number;
    weight: number;
  };
};

type CreateExercise = IAction<exerciseActionTypes.CREATE_EXERCISE, Exercise>;

export type ExerciseActions = CreateExercise;
