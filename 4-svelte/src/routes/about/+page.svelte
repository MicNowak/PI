<script lang="ts">
	const technologies = [
		{
			name: 'TypeScript',
			description:
				'TypeScript is a superset of JavaScript that adds static typing and other features to the language.'
		},
		{
			name: 'Svelte',
			description:
				'Svelte is a component-based JavaScript framework that compiles components to highly efficient vanilla JavaScript code.'
		},
		{
			name: 'Tailwind CSS',
			description:
				'Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes for styling web applications.'
		},
		{
			name: 'Sveltekit',
			description:
				'SvelteKit is a framework for building web applications with Svelte that provides server-side rendering, routing, and other features out of the box.'
		},
		{
			name: 'Skeleton',
			description:
				'Skeleton is a UI framework that provides a set of reusable components and utilities for building modern web applications.'
		}
	];
</script>

<h1 class="h1">About</h1>
<p>
	This website was created for the sole purpose of creating a responsive single page website for web
	programming classes in SGGW university.
</p>
<h2>Technologies used for creating:</h2>
<dl class="list-dl">
	{#each technologies as { name, description }}
		<div>
			<span class="badge text-4xl">•</span>
			<span class="flex-auto">
				<dt class="text-xl font-bold">{name}</dt>
				<dd class="text-sm">{description}</dd>
			</span>
		</div>
	{/each}
</dl>
