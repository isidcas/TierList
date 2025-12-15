import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import de from './de.json';
import ca from './ca.json';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      ca: { translation: ca }
    },
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export const t = (key) => i18n.t(key);
export default i18n;
