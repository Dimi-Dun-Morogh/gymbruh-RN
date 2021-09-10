import {WorkOutSet} from '../workout/workout.types';
import {InitialExerState} from './exercise.reducer';

export const handleExerciseUpdate = (
  state: InitialExerState,
  set: WorkOutSet,
) => {
  const oldExercise = state.exercises[set.exerciseId];
  const {date, reps, weight} = set;

  const isRecordReps = () => {
    return oldExercise.recordReps.reps < reps
      ? {
          reps,
          weight,
          date: new Date(date).toLocaleString(),
        }
      : oldExercise.recordReps;
  };
  const isRecordWeight = () => {
    return oldExercise.recordWeight.weight < weight
      ? {
          reps,
          weight,
          date: new Date(date).toLocaleString(),
        }
      : oldExercise.recordReps;
  };

  return {
    ...oldExercise,
    lastDate: new Date(date).toLocaleString(),
    lastReps: reps,
    lastWeight: weight,
    allSets: 1 + oldExercise.allSets,
    recordReps: isRecordReps(),
    recordWeight: isRecordWeight(),
  };
};
