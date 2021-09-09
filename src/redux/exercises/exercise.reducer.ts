import {Exercise, ExerciseActions, exerciseActionTypes} from './exercise.types';
var mockData = require('../../mocks/exercises');

const INITIAL_STATE = {
  exercises: null || ({} as {[key: string]: Exercise}),
};

INITIAL_STATE.exercises = mockData;

type InitialExerState = typeof INITIAL_STATE;

const exerciseReducer = (
  state: InitialExerState = INITIAL_STATE,
  action: ExerciseActions,
) => {
  switch (action.type) {
    case exerciseActionTypes.CREATE_EXERCISE:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload!.id]: action.payload!,
        },
      };
    default:
      return state;
  }
};

export default exerciseReducer;
