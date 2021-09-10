import {generateId} from '../../helpers';
import {routineActionTypes} from './routine.types';

export const createRoutine = (
  name: string,
  exercises: string[],
  id?: string,
) => {
  const newRoutine = {
    id: id || generateId.id(),
    name,
    exercises,
  };

  return {
    type: routineActionTypes.CREATE_ROUTINE,
    payload: newRoutine,
  };
};

export const deleteRoutine = (id: string) => {
  return {
    type: routineActionTypes.DELETE_ROUTINE,
    payload: id,
  };
};
