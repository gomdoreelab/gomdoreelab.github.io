<script lang="ts">
	import { onMount } from 'svelte';
	import init, { greet } from 'wasm-jigsaw';

	onMount(() => {
		init().then(() => {
			greet('WebAssembly');
		});
	});

	const test = 'test';
</script>

<h1 class="text-2xl">테스트 {test}</h1>
