import {format} from 'date-fns';
import {generateId} from '../../helpers';
import {routineActionTypes, Routine} from './routine.types';

export const createRoutine = (name: string, exercises: string[]) => {
  const newRoutine = {
    id: generateId.id(),
    name,
    exercises,
    allCount: 0,
    lastDate: 0,
  };

  return {
    type: routineActionTypes.CREATE_ROUTINE,
    payload: newRoutine,
  };
};

export const editRoutine = (routine: Routine) => {
  return {
    type: routineActionTypes.EDIT_ROUTINE,
    payload: routine,
  };
};

export const updateRoutine = (routine: Routine) => {
  return {
    type: routineActionTypes.EDIT_ROUTINE,
    payload: {
      ...routine,
      allCount: 1 + routine.allCount,
      lastDate: format(new Date(), 'MM/dd/yyyy H:mm '),
    },
  };
};

export const deleteRoutine = (id: string) => {
  return {
    type: routineActionTypes.DELETE_ROUTINE,
    payload: id,
  };
};
