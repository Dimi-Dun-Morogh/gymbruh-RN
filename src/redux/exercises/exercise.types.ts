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
    date: string | null;
  };
  recordWeight: {
    reps: number;
    weight: number;
    date: string | null;
  };
};

type CreateExercise = IAction<exerciseActionTypes.CREATE_EXERCISE, Exercise>;

export type ExerciseActions = CreateExercise;
