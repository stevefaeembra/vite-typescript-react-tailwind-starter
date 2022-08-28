import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGES, DEFAULT_LANGUAGE } from './i18n.constants';

i18next.use(initReactI18next).init({
  resources: LANGUAGES,
  debug: false,
  fallbackLng: DEFAULT_LANGUAGE,
});

export default i18next;
