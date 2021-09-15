import {appSettingsActionTypes} from './appSettings.types';

export const setLanguage = (lang: string) => {
  return {
    type: appSettingsActionTypes.SET_LANGUAGE,
    payload: lang,
  };
};

export const setWeight = (weight: string) => {
  return {
    type: appSettingsActionTypes.SET_WEIGHT,
    payload: weight,
  };
};

export const setDarkTheme = (bool: boolean) => {
  return {
    type: appSettingsActionTypes.SET_THEME,
    payload: bool,
  };
};
