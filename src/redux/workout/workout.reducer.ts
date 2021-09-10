import {Reducer} from 'redux';
import {generateId} from '../../helpers';
import {WorkOutActionTypes, WorkOutActions, WorkOutSet} from './workout.types';

const INITIAL_STATE = {
  id: '' as string,
  sets: [] as WorkOutSet[],
  routineId: '' as string,
};

type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

const WorkOutReducer: Reducer<INITIAL_STATE_TYPE, WorkOutActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case WorkOutActionTypes.ADD_SETS:
      return {
        ...state,
        sets: [...state.sets, action.payload!],
      };
    case WorkOutActionTypes.DELETE_SET:
      return {
        ...state,
        sets: [...state.sets.filter(item => item.id !== action.payload)],
      };
    case WorkOutActionTypes.START_WORKOUT:
      return {
        routineId: action.payload!,
        id: generateId.id(),
        sets: [],
      };
    case WorkOutActionTypes.FINISH_WORKOUT: {
      return {
        routineId: '',
        date: 0,
        id: '',
        sets: [],
      };
    }
    default:
      return state;
  }
};

export default WorkOutReducer;
