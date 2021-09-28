import {generateId} from '../../helpers';
import {WorkOutSet} from '../workout/workout.types';
import {Exercise, exerciseActionTypes} from './exercise.types';

export const createExercise = (name: string) => {
  const id = generateId.id();
  const newExercise: Exercise = {
    id,
    name,
    lastDate: '',
    lastReps: 0,
    lastWeight: 0,
    allSets: 0,
    recordReps: {
      reps: 0,
      weight: 0,
      date: null,
    },
    recordWeight: {
      weight: 0,
      reps: 0,
      date: null,
    },
  };
  return {
    type: exerciseActionTypes.CREATE_EXERCISE,
    payload: newExercise,
  };
};

export const updateExercises = (sets: WorkOutSet[]) => {
  return {
    type: exerciseActionTypes.UPDATE_EXERCISE,
    payload: sets,
  };
};

export const editExercise = (exercise: Exercise) => {
  return {
    type: exerciseActionTypes.EDIT_EXERCISE,
    payload: exercise,
  };
};

export const deleteExercise = (id: string) => {
  return {
    type: exerciseActionTypes.DELETE_EXERCISE,
    payload: id,
  };
};
