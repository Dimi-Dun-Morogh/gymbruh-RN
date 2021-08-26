import {ExerciseActions, exerciseActionTypes} from './exercise.types';

const INITIAL_STATE = {};

type InitialExerState = typeof INITIAL_STATE;

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
