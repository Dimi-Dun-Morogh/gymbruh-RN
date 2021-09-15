import {IAction} from '../store';

export const languages = ['ru', 'en'] as const;
export const weights = ['kg', 'lbs'] as const;

export enum appSettingsActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_WEIGHT = 'SET_WEIGHT',
  SET_THEME = 'SET_THEME',
}

type SetLanguage = IAction<appSettingsActionTypes.SET_LANGUAGE, string>;
type SetWeight = IAction<appSettingsActionTypes.SET_WEIGHT, string>;
type SetTheme = IAction<appSettingsActionTypes.SET_THEME, boolean>;

export type AppSettingsActions = SetLanguage | SetWeight | SetTheme;
