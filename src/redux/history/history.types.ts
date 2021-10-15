import {IAction} from '../store';
import {WorkOutSet} from '../workout/workout.types';
import {INITIAL_STATE_TYPE} from './history.reducer';

export enum HistoryActionTypes {
  ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM',
  BACKUP_HISTORY = 'BACKUP_HISTORY',
}

export type HistoryItem = {
  id: string;
  sets: WorkOutSet[];
  routineId: string;
  routineName: string;
  date: string;
};

type addHistoryItem = IAction<HistoryActionTypes.ADD_HISTORY_ITEM, HistoryItem>;
export type BackUpHistory = IAction<
  HistoryActionTypes.BACKUP_HISTORY,
  INITIAL_STATE_TYPE
>;

export type HistoryActions = addHistoryItem | BackUpHistory;
