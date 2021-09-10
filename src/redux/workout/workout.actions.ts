import {WorkOutSet, WorkOutActionTypes} from './workout.types';

export const addNewSet = (set: WorkOutSet) => {
  return {
    type: WorkOutActionTypes.ADD_SETS,
    payload: set,
  };
};

export const deleteSet = (id: string) => {
  return {
    type: WorkOutActionTypes.DELETE_SET,
    payload: id,
  };
};

export const startWorkOut = (routineId: string) => {
  return {
    type: WorkOutActionTypes.START_WORKOUT,
    payload: {
      routineId,
    },
  };
};

export const finishWorkOut = () => {
  return {
    type: WorkOutActionTypes.FINISH_WORKOUT,
  };
};
