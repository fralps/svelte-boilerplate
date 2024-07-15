import { _, dictionary, getLocaleFromNavigator, init, json, locale } from 'svelte-i18n';
import en from '@translations/locales/en.json' with { type: 'json' };
import fr from '@translations/locales/fr.json' with { type: 'json' };

const setupI18n = ({ withLocale: _locale } = { withLocale: 'en' }) => {
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });

  dictionary.set({
    en: en,
    fr: fr
  });

  locale.set(_locale);
};

export { _, setupI18n, locale, json, dictionary };
