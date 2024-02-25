<script lang="ts">
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import { routes, paths, push } from '@router/routes';
  import { setupI18n } from '@translations/i18n';
  import { currentLocale } from '@store/navigation/locale';

  onMount(() => {
    setLocale();
  });

  // Get the current locale from the store or from i18n default locale
  const setLocale = (): void => {
    $currentLocale === null ?  setupI18n() : setupI18n({ withLocale: $currentLocale });
  };

  // Routes interceptor function that redirects to homepage
  const routesConditionsFailed = () => {
    push(paths.home.path);
  };
</script>

<main class="min-h-screen">
  <Router {routes} on:conditionsFailed={routesConditionsFailed} />
</main>
