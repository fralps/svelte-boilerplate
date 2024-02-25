<script lang="ts">
  import { dictionary, setupI18n, locale } from '@translations/i18n';
  import { currentLocale } from '@store/navigation/locale';

  let value: string | null = $locale;

  const availablesLocales: string[] = Object.keys($dictionary);

  const handleLocaleChange = (event: any): void => {
    const newLocale: string = event.target.value;
    currentLocale.set(newLocale);
    setupI18n({ withLocale: newLocale });
  };
</script>

<select {value} on:change|preventDefault={handleLocaleChange} class="px-2 py-1 border rounded-full cursor-pointer">
  {#each availablesLocales as locale}
    <option value={locale}>{locale}</option>
  {/each}
</select>
