<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { List, ListItem } from 'gomdoreelab-lib-material-web';

	let nodes = $state([]);

	onMount(() => {
		nodes = document.querySelectorAll('h1, h2, h3');
		nodes.forEach((node, index) => {
			if (!node.id) {
				const nodeText = node.textContent.toLowerCase().replace(/\s+/g, '-');
				node.id = `section-${nodeText}-${index}`;
			}
		});
	});
</script>

<div class="navigation">
	<List>
		{#each nodes as node}
			{#if node.tagName === 'H1'}
				<ListItem href="#{node.id}"><span class="h1">{node.textContent}</span></ListItem>
			{:else if node.tagName === 'H2'}
				<ListItem href="#{node.id}"><span class="h2">{node.textContent}</span></ListItem>
			{:else}
				<ListItem href="#{node.id}"><span class="h3">{node.textContent}</span></ListItem>
			{/if}
		{/each}
	</List>
</div>

<style>
	.navigation {
		padding: 1rem;
	}

	.h1 {
		line-height: var(--mdui-typescale-title-large-line-height);
		font-size: var(--mdui-typescale-title-large-size);
		letter-spacing: var(--mdui-typescale-title-large-tracking);
		font-weight: var(--mdui-typescale-title-large-weight);
	}

	.h2 {
		line-height: var(--mdui-typescale-title-medium-line-height);
		font-size: var(--mdui-typescale-title-medium-size);
		letter-spacing: var(--mdui-typescale-title-medium-tracking);
		font-weight: var(--mdui-typescale-title-medium-weight);
	}

	.h3 {
		line-height: var(--mdui-typescale-title-small-line-height);
		font-size: var(--mdui-typescaletitle-small-size);
		letter-spacing: var(--mdui-typescale-title-small-tracking);
		font-weight: var(--mdui-typescale-title-small-weight);
	}
</style>
