import {Routine, RoutineActions, routineActionTypes} from './routine.types';

import {Reducer} from 'redux';

const INITIAL_STATE = {
  routines: {} as {[key: string]: Routine},
};

type InitialRoutineState = typeof INITIAL_STATE;

const RoutineReducer: Reducer<InitialRoutineState, RoutineActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case routineActionTypes.CREATE_ROUTINE:
    case routineActionTypes.EDIT_ROUTINE:
      return {
        ...state,
        routines: {
          ...state.routines,
          [action.payload!.id]: action.payload!,
        },
      };
    case routineActionTypes.DELETE_ROUTINE:
      return {
        ...state,
        routines: Object.fromEntries(
          Object.entries({...state.routines}).filter(
            ([id]) => id !== action.payload!,
          ),
        ),
      };

    default:
      return state;
  }
};

export default RoutineReducer;
