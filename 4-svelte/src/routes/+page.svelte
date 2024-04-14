<script lang="ts">
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<h1 class="h1">Task 4</h1>
<TabGroup>
	<!-- Tab Navigation --->
	<Tab bind:group={tabSet} name="Overview" value={0}>Overview</Tab>
	<Tab bind:group={tabSet} name="Purpose" value={1}>Purpose</Tab>
	<Tab bind:group={tabSet} name="Responsive Design" value={2}>Responsive Design</Tab>
	<Tab bind:group={tabSet} name="Single-Page Application" value={3}>Single-Page Application</Tab>
	<Tab bind:group={tabSet} name="Key Features" value={4}>Key Features</Tab>
	<Tab bind:group={tabSet} name="Conclusion" value={5}>Conclusion</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<p>
				For this task, I have created a new page component that showcases the power and flexibility
				of Svelte framework. The page incorporates modern web development concepts such as
				responsive web design (RWD) and single-page application (SPA) architecture.
			</p>
		{:else if tabSet === 1}
			<p>
				the purpose of showcasing the power and flexibility of Svelte framework. It incorporates
				modern web development concepts such as responsive web design (RWD) and single-page
				application (SPA) architecture.
			</p>
		{:else if tabSet === 2}
			<p>
				The website is designed to adapt to different screen sizes and devices, providing an optimal
				user experience across desktop, tablet, and mobile platforms. It utilizes media queries and
				flexible layout techniques to ensure that the content is displayed appropriately on various
				screen resolutions.
			</p>
		{:else if tabSet === 3}
			<p>
				As a single-page application, the website leverages Svelte's reactive and component-based
				approach to deliver a seamless and interactive user interface. It dynamically updates the
				content without requiring full page reloads, resulting in faster and smoother navigation.
			</p>
		{:else if tabSet === 4}
			<p>
				The project demonstrates the usage of Svelte's key features, such as declarative syntax,
				reactive statements, and component composition. It showcases how Svelte simplifies the
				development process by eliminating the need for a virtual DOM and optimizing the generated
				JavaScript code.
			</p>
		{:else if tabSet === 5}
			<p>
				Overall, this project serves as a comprehensive example of building a modern web application
				using Svelte, highlighting its efficiency, performance, and developer-friendly nature.
			</p>
		{/if}
	</svelte:fragment>
</TabGroup>
