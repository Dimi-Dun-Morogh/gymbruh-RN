import {generateId} from '../../helpers';
import {WorkOutSet} from '../workout/workout.types';
import {HistoryActionTypes} from './history.types';

export const addHistory = (
  routineId: string,
  sets: WorkOutSet[],
  routineName: string,
) => {
  return {
    type: HistoryActionTypes.ADD_HISTORY_ITEM,
    payload: {
      routineId,
      sets,
      routineName,
      date: Number(new Date()),
      id: generateId.id(),
    },
  };
};
