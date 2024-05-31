<script lang="ts">
	import { getCookie, setCookie } from '$lib/cookie';
	import { langStore, type Lang } from '$lib/lang';
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch
	} from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.open({});
	}
	function drawerClose(): void {
		drawerStore.close();
	}

	let lang: Lang;
	langStore.subscribe((value) => {
		lang = value;
	});
	$: {
		langStore.set(lang);
		if (cookieConsent === 'true') {
			setCookie('lang', lang, 30);
		}
	}
	let cookieConsent = getCookie('cookie-consent') === 'true' ? 'true' : 'false';
	if (cookieConsent === 'true') {
		setCookie('lang', getCookie('lang'), 30);
		setCookie('cookie-consent', true, 30);
	}
	const cookieInfo = {
		pl: {
			header: 'Ta strona używa plików cookies',
			text: 'Używamy plików cookies, aby zapewnić najlepsze doświadczenia na stronie. Korzystając z strony, zgadzasz się na naszą politykę plików cookies.'
		},
		en: {
			header: 'This site uses cookies',
			text: 'We use cookies to ensure you get the best experience on website. By using  website you agree to our Cookie Policy.'
		}
	};
</script>

<Drawer>
	<Navigation onClick={drawerClose} />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</svelte:fragment>
			<strong class="text-xl uppercase">PORTFOLIO</strong>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<button
					class="btn btn-sm variant-filled"
					on:click={() => {
						lang = lang === 'pl' ? 'en' : 'pl';
					}}
				>
					{lang === 'pl' ? 'PL' : 'EN'}
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<svelte:fragment slot="footer">
		{#if cookieConsent !== 'true'}
			<aside class="alert variant-ghost">
				<div class="alert-message text-center">
					<h3 class="h3">
						{cookieInfo[lang].header}
					</h3>
					<p>
						{cookieInfo[lang].text}
					</p>
				</div>
				<button
					class="alert-action btn btn-md variant-filled"
					on:click={() => {
						setCookie('lang', lang, 30);
						setCookie('cookie-consent', true, 30);
						cookieConsent = 'true';
					}}
				>
					Accept
				</button>
			</aside>
		{/if}
	</svelte:fragment>
</AppShell>
