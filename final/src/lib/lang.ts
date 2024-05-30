import { writable } from 'svelte/store';
import { getCookie, setCookie } from '$lib/cookie';

export type Lang = 'pl' | 'en';

if (!getCookie('lang')) setCookie('lang', 'en', 365);
export const langStore = writable<Lang>((getCookie('lang') as Lang) || 'en');
