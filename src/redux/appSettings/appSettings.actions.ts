import {appSettingsActionTypes} from './appSettings.types';
import i18n from '../../locales';

export const setLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
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

export const setSound = (bool: boolean) => {
  return {
    type: appSettingsActionTypes.SET_SOUND,
    payload: bool,
  };
};
