import 'dayjs/locale/fr';
import 'dayjs/locale/en';
import dayjs from 'dayjs';
import { derived } from 'svelte/store';
import { locale } from '@translations/i18n';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localeData);
dayjs.extend(localizedFormat);

const i18nDayJs = derived(locale, ($locale) => {
  dayjs.locale($locale as ILocale);
  return dayjs;
});

export { i18nDayJs as dayjs };
