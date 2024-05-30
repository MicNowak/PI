import { writable } from 'svelte/store';
import { getCookie } from '$lib/cookie';

export type Lang = 'pl' | 'en';

export const langStore = writable<Lang>((getCookie('lang') as Lang) || 'en');
