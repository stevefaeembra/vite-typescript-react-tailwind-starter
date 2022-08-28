import * as english from './en/translation.json';
import french from './fr/translation.json';

import { GBIcon, FRIcon } from './icons';

export const LANGUAGES_LABELS = {
  en: {
    label: 'English',
    icon: GBIcon,
  },
  fr: {
    label: 'French',
    icon: FRIcon,
  },
};

export const LANGUAGES = {
  en: {
    translation: english,
  },
  fr: {
    translation: french,
  },
};

export const LANGUAGE_KEY = 'app-language';

export const DEFAULT_LANGUAGE = 'en';
