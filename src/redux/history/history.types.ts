import {IAction} from '../store';
import {WorkOutSet} from '../workout/workout.types';

export enum HistoryActionTypes {
  ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM',
}

export type HistoryItem = {
  id: string;
  sets: WorkOutSet[];
  routineId: string;
  routineName: string;
  date: number;
};

type addHistoryItem = IAction<HistoryActionTypes.ADD_HISTORY_ITEM, HistoryItem>;

export type HistoryActions = addHistoryItem;
