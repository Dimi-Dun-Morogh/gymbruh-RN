import {Reducer} from 'redux';
import {
  languages,
  weights,
  appSettingsActionTypes,
  AppSettingsActions,
} from './appSettings.types';

const INITIAL_STATE = {
  languages: languages,
  currentLanguage: 'ru',
  weightPoints: weights,
  currentWeightPoint: 'kg',
  darkTheme: true,
  soundOn: true,
};

export type InitialStateType = typeof INITIAL_STATE;

const AppSettingsReducer: Reducer<InitialStateType, AppSettingsActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case appSettingsActionTypes.SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload!,
      };
    case appSettingsActionTypes.SET_THEME:
      return {
        ...state,
        darkTheme: action.payload!,
      };
    case appSettingsActionTypes.SET_WEIGHT:
      return {
        ...state,
        currentWeightPoint: action.payload!,
      };
    case appSettingsActionTypes.SET_SOUND:
      return {
        ...state,
        soundOn: action.payload!,
      };
    case appSettingsActionTypes.BACKUP_SETTINGS:
      console.log(action);
      return action.payload!;
    default:
      return state;
  }
};

export default AppSettingsReducer;
