<script>
	// import { getBreakPoint, addBreakPointEvent, getHTMLTheme } from 'gomdoreelab-lib-material-web';
	import { State } from '$lib/snippet/state/state.svelte.js';
	import { onMount } from 'svelte';

	let { _breakpoint } = $props();

	let appState = $state();

	onMount(() => {
		appState = new State();
	});
</script>

{#if appState}
	{@render _breakpoint?.(appState)}
{/if}
