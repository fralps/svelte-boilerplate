import { push, location, link } from 'svelte-spa-router';

// App routes and paths
import { pages } from '@router/app-routes';
import { paths } from '@router/paths';

const routes = {
  ...pages
};

export { routes, push, location, paths, link };
