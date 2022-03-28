import {WorkOutSet} from '../workout/workout.types';

import {Exercise} from './exercise.types';

export const handleExercisesUpdate = (
  exercises: {[key: string]: Exercise},
  sets: WorkOutSet[],
) => {
  const newExercises = {
    ...exercises,
  };
  sets.forEach(
    set =>
      (newExercises[set.exerciseId] = handleExerciseUpdate(newExercises, set)),
  );
  return newExercises;
};

export const handleExerciseUpdate = (
  exercises: {[key: string]: Exercise},
  set: WorkOutSet,
) => {
  const oldExercise = exercises[set.exerciseId];
  const {date, reps, weight} = set;

  const isRecordReps = () => {
    return oldExercise.recordReps.reps <= reps
      ? {
          reps,
          weight,
          date,
        }
      : oldExercise.recordReps;
  };
  const isRecordWeight = () => {
    return oldExercise.recordWeight.weight <= weight
      ? {
          reps,
          weight,
          date,
        }
      : oldExercise.recordReps;
  };

  return {
    ...oldExercise,
    lastDate: date,
    lastReps: reps,
    lastWeight: weight,
    allSets: 1 + oldExercise.allSets,
    recordReps: isRecordReps(),
    recordWeight: isRecordWeight(),
  };
};
