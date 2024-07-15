<script lang="ts">
  import { dictionary, locale, setupI18n } from '@translations/i18n';
  import { currentLocale } from '@store/navigation/locale';

  let value: string | null = $locale;

  const availablesLocales: string[] = Object.keys($dictionary);

  const handleLocaleChange = (event: any): void => {
    const newLocale: string = event.target.value;
    currentLocale.set(newLocale);
    setupI18n({ withLocale: newLocale });
  };
</script>

<select class="px-2 py-1 border rounded-full cursor-pointer" {value} on:change|preventDefault={handleLocaleChange}>
  {#each availablesLocales as locale}
    <option value={locale}>{locale}</option>
  {/each}
</select>
