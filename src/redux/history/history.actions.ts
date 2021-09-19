import {format} from 'date-fns';
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
      date: format(new Date(), 'MM/dd/yyyy H:mm '),
      id: generateId.id(),
    },
  };
};
