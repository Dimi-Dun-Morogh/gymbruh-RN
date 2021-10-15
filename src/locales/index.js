import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from '../redux/store';
import {getLocales} from 'react-native-localize';

const resources = {
  en: {
    translation: require('../locales/en.json'),
  },
  ru: {
    translation: require('../locales/ru.json'),
  },
};

export const defineLanguage = () => {
  const {languages, currentLanguage} = store.getState().appSettingsState;

  if (!currentLanguage.length) {
    const deviceLang = getLocales()[0].languageCode;
    if (languages.includes(deviceLang)) {
      store.dispatch({
        type: 'SET_LANGUAGE',
        payload: deviceLang,
      });
      return deviceLang;
    } else {
      store.dispatch({
        type: 'SET_LANGUAGE',
        payload: 'en',
      });
      return 'en';
    }
  }
  return currentLanguage;
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
