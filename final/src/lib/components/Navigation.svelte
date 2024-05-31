<script lang="ts">
	import { langStore, type Lang } from '$lib/lang';
	export let onClick = () => {};
	let lang: Lang;
	langStore.subscribe((value) => {
		lang = value;
	});
	const pageInfo = {
		main: {
			header: {
				pl: 'Nawigacja',
				en: 'Navigation'
			},
			nav: {
				home: {
					pl: 'Strona główna',
					en: 'Home'
				},
				bloh: {
					pl: 'Blog',
					en: 'Blog'
				},
				about: {
					pl: 'O stronie',
					en: 'About'
				}
			}
		},
		projects: {
			header: {
				pl: 'Projekty',
				en: 'Projects'
			},
			projects: [
				{
					name: 'Hello World',
					path: 'hello-world'
				},
				{
					name: 'HTML3 + CSS',
					path: 'html-css'
				},
				{
					name: 'Tic Tac Toe',
					path: 'tic-tac-toe'
				}
			]
		}
	};
</script>

<nav class="list-nav p-4">
	<h4 class="h4 py-1">{pageInfo.main.header[lang]}</h4>
	<ul>
		<li><a href="/" on:click={onClick}>{pageInfo.main.nav.home[lang]}</a></li>
		<li><a href="/blog" on:click={onClick}>{pageInfo.main.nav.bloh[lang]}</a></li>
		<li><a href="/about" on:click={onClick}>{pageInfo.main.nav.about[lang]}</a></li>
	</ul>
	<h4 class="h4 py-1">{pageInfo.projects.header[lang]}</h4>
	<ul>
		{#each pageInfo.projects.projects as project}
			<li><a href={'/projects/' + project.path} on:click={onClick}>{project.name}</a></li>
		{/each}
	</ul>
</nav>
