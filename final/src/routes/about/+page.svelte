<script lang="ts">
	import { langStore, type Lang } from '$lib/lang';

	let lang: Lang;
	langStore.subscribe((value) => {
		lang = value;
	});
	const content = {
		title: {
			pl: 'Informacje na temat strony',
			en: 'Information about the page'
		},
		description: {
			pl: 'Ta strona została stworzona w celu stworzenia responsywnej strony internetowej dla zajęć z programowania internetowego na uniwersytecie SGGW.',
			en: 'This website was created for the sole purpose of creating a responsive single page website for web programming classes in SGGW university.'
		},
		technologies: {
			pl: 'Technologie użyte do stworzenia:',
			en: 'Technologies used for creating:'
		}
	};
	const technologies = [
		{
			name: 'TypeScript',
			description: {
				pl: 'TypeScript to nadzbiór języka JavaScript, który dodaje statyczne typowanie i inne funkcje do języka.',
				en: 'TypeScript is a superset of JavaScript that adds static typing and other features to the language.'
			}
		},
		{
			name: 'Svelte',
			description: {
				pl: 'Svelte to oparty na komponentach framework JavaScript, który kompiluje komponenty do bardzo wydajnego kodu JavaScript.',
				en: 'Svelte is a component-based JavaScript framework that compiles components to highly efficient vanilla JavaScript code.'
			}
		},
		{
			name: 'Tailwind CSS',
			description: {
				pl: 'Tailwind CSS to framework CSS oparty na klasach narzędziowych, który dostarcza zestaw predefiniowanych klas do stylizacji aplikacji internetowych.',
				en: 'Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes for styling web applications.'
			}
		},
		{
			name: 'Sveltekit',
			description: {
				pl: 'SvelteKit to framework do budowania aplikacji internetowych z Svelte, który zapewnia renderowanie po stronie serwera, routowanie i inne funkcje od razu.',
				en: 'SvelteKit is a framework for building web applications with Svelte that provides server-side rendering, routing, and other features out of the box.'
			}
		},
		{
			name: 'Skeleton',
			description: {
				pl: 'Skeleton to framework UI, który dostarcza zestaw komponentów i narzędzi do budowania nowoczesnych aplikacji internetowych.',
				en: 'Skeleton is a UI framework that provides a set of reusable components and utilities for building modern web applications.'
			}
		}
	];
</script>

<h1 class="h1">{content.title[lang]}</h1>
<p>
	{content.description[lang]}
</p>
<h2>{content.technologies[lang]}</h2>
<dl class="list-dl">
	{#each technologies as { name, description }}
		<div>
			<span class="badge text-4xl">•</span>
			<span class="flex-auto">
				<dt class="text-xl font-bold">{name}</dt>
				<dd class="text-sm">{description[lang]}</dd>
			</span>
		</div>
	{/each}
</dl>
