<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>


<main class="relative w-full">
	<Header />
	<!--page content-->
	<slot />
</main>