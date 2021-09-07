import {Exercise, ExerciseActions, exerciseActionTypes} from './exercise.types';
import mockData from '../../mocks/exercises';

const INITIAL_STATE = {
  ...mockData,
};

type InitialExerState = null | {[key: string]: Exercise};

const exerciseReducer = (
  state: InitialExerState = INITIAL_STATE,
  action: ExerciseActions,
) => {
  switch (action.type) {
    case exerciseActionTypes.CREATE_EXERCISE:
      return {
        ...state,
        [action.payload!.id]: action.payload!,
      };
    default:
      return state;
  }
};

export default exerciseReducer;
