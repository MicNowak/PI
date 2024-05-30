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
		setCookie('lang', lang, 365);
		langStore.set(lang);
	}
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
</AppShell>
