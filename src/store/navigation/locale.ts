import { writable } from 'svelte/store';

// Persisted theme store
const storedLocale: string = JSON.parse(localStorage.getItem('currentLocale') as string);
export const currentLocale = writable<string>(storedLocale);
currentLocale.subscribe((value) => {
  localStorage.setItem('currentLocale', JSON.stringify(value));
});