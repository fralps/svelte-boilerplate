import '@assets/styles/app.scss';
import App from '@src/App.svelte';

const app = new App({
  target: document.getElementById('app') as HTMLElement
});

export default app;
