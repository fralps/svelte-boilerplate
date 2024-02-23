<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes, paths, push } from '@router/routes';
  import { setupI18n } from '@translations/i18n';

  setupI18n();

  // Routes interceptor function that redirects to homepage
  const routesConditionsFailed = () => {
    push(paths.home.path);
  };
</script>

<main class="min-h-screen">
  <Router {routes} on:conditionsFailed={routesConditionsFailed} />
</main>
