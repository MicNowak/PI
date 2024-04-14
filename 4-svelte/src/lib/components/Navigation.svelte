<script lang="ts">
	export let onClick = () => {};
</script>

<nav class="list-nav p-4">
	<h4 class="h4">Navigation</h4>
	<ul>
		<li><a href="/" on:click={onClick}>Home</a></li>
		<li><a href="/hello-world" on:click={onClick}>Hello World</a></li>
		<li><a href="/html-css" on:click={onClick}>HTML3 + CSS</a></li>
		<li><a href="/tic-tac-toe" on:click={onClick}>Tic Tac Toe</a></li>
		<li><a href="/about" on:click={onClick}>About</a></li>
	</ul>
</nav>
