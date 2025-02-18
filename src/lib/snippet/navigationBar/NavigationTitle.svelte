<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { getResizeObserver, List, ListItem } from 'gomdoreelab-lib-material-web';

	let nodes = $state([]);
	let activeNodes = $state([]);
	let tabs = $state();
	let height = $state(0);

	onMount(() => {
		tabs = document.querySelector('mdui-tabs');

		nodes = document.querySelectorAll('h1, h2, h3');
		nodes.forEach((node, index) => {
			if (!node.id) {
				const nodeText = node.textContent.toLowerCase().replace(/\s+/g, '-');
				node.id = `section-${nodeText}-${index}`;
			}
		});

		// 높이는 변화가 없다고 가정!
		height = window.innerHeight;

		const observer = getResizeObserver('main', function (entry, observer) {
			if (document.querySelector('main').offsetHeight <= height) {
				document.querySelectorAll('mdui-list-item[href^="#"]').forEach((link) => {
					link.addEventListener('click', (event) => {
						event.preventDefault();
					});
				});
			}
		});

		if (!tabs || page.url.pathname.includes('components/tabs')) {
			activeNodes = nodes;

			return;
		}

		tabs.addEventListener('change', (event) => getActiveNodes(event));
		initActiveNodes(tabs.value);
	});

	const getActiveNodes = (event) => {
		const value = event.target.value;

		initActiveNodes(value);
	};

	const initActiveNodes = (value) => {
		const panel = Array.from(document.querySelectorAll('mdui-tab-panel'))
			.filter((panel) => panel.value === value)
			.at(0);

		activeNodes = [...nodes].filter((node) => {
			return panel.contains(node) || node.tagName === 'H1';
		});
	};
</script>

<div class="navigation">
	<List>
		{#each activeNodes as node}
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
		font-size: var(--mdui-typescale-title-small-size);
		letter-spacing: var(--mdui-typescale-title-small-tracking);
		font-weight: var(--mdui-typescale-title-small-weight);
	}
</style>
