import {Reducer} from 'redux';
import {HistoryItem, HistoryActions, HistoryActionTypes} from './history.types';

const INITIAL_STATE = {
  items: [] as HistoryItem[],
};

export type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

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
    case HistoryActionTypes.BACKUP_HISTORY:
      return action.payload!;
    default:
      return state;
  }
};
export default HistoryReducer;
