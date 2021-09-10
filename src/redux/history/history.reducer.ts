import {Reducer} from 'redux';
import {HistoryItem, HistoryActions, HistoryActionTypes} from './history.types';

const INITIAL_STATE = {
  items: [] as HistoryItem[],
};

type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

const HistoryReducer: Reducer<INITIAL_STATE_TYPE, HistoryActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case HistoryActionTypes.ADD_HISTORY_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload!],
      };

    default:
      return state;
  }
};
export default HistoryReducer;
