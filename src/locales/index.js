import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from '../redux/store';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: require('../locales/en.json'),
  },
  ru: {
    translation: require('../locales/ru.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: store.getState().appSettingsState.currentLanguage,
  interpolation: {
    escapeValue: false,
  },
});
store.getState().appSettingsState.currentLanguage;
export default i18n;
