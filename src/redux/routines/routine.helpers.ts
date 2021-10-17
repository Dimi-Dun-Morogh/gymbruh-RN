import {Routine} from './routine.types';
export const onGlobalExerciseDeletion = (
  routines: {[key: string]: Routine},
  exerciseId: string,
) => {
  const newRoutines = {...routines};
  for (let routineId in newRoutines) {
    const routine = newRoutines[routineId];
    routine.exercises = routine.exercises.filter(id => id !== exerciseId);
  }
  //console.log(routines, newRoutines);
  return newRoutines;
};
