import { dictionary, locale, _, json, init, getLocaleFromNavigator } from 'svelte-i18n';
const en = await import('@translations/locales/en.json', { with: { type: 'json' } });
const fr = await import('@translations/locales/fr.json', { with: { type: 'json' } });

const setupI18n = ({ withLocale: _locale } = { withLocale: 'fr' }) => {
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });

  dictionary.set({
    fr: fr,
    en: en
  });

  locale.set(_locale);
};

export { _, setupI18n, locale, json, dictionary };
