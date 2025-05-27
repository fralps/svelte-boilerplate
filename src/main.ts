import '@assets/styles/app.css';
import { mount } from 'svelte';
import App from '@src/App.svelte';

// @ts-expect-error - Ignore target type error
const app = mount(App, { target: document.getElementById('app') });

export default app;
