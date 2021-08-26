import {generateId} from '../../helpers';
import {Exercise, exerciseActionTypes} from './exercise.types';

export const createExercise = (name: string) => {
  const id = generateId.id();
  const newExercise: Exercise = {
    id,
    name,
    lastDate: null,
    lastReps: 0,
    lastWeight: null,
    allSets: null,
    recordReps: {
      reps: 0,
      weight: null,
    },
    recordWeight: {
      weight: 0,
      reps: 0,
    },
  };
  return {
    type: exerciseActionTypes.CREATE_EXERCISE,
    payload: newExercise,
  };
};
