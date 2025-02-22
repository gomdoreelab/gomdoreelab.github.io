<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { getResizeObserver, List, ListItem } from 'gomdoreelab-lib-material-web';

	/**
	 * @type {any[] | NodeListOf<Element>}
	 */
	let nodes = $state([]);

	/**
	 * @type {any[] | NodeListOf<Element>}
	 */
	let activeNodes = $state([]);
	let tabs = $state();
	let height = $state(0);

	onMount(() => {
		tabs = document.querySelector('mdui-tabs');

		nodes = document.querySelectorAll('h1, h2, h3');
		nodes.forEach((node, index) => {
			if (!node.id) {
				const nodeContent = node.textContent;

				if (nodeContent) {
					node.id = `section-${index}`;
				}
			}
		});

		// 높이는 변화가 없다고 가정!
		height = window.innerHeight;

		const observer = getResizeObserver(
			'main',
			function (/** @type {any} */ _entry, /** @type {any} */ _observer) {
				const main = document.querySelector('main');

				if (!main) return;
				if (main.offsetHeight <= height) {
					document.querySelectorAll('mdui-list-item[href^="#"]').forEach((link) => {
						link.addEventListener('click', (event) => {
							event.preventDefault();
						});
					});
				}
			}
		);

		if (!tabs || page.url.pathname.includes('components/tabs')) {
			activeNodes = nodes;

			return;
		}

		tabs.addEventListener('change', (/** @type {any} */ event) => getActiveNodes(event));
		initActiveNodes(tabs.value);
	});

	const getActiveNodes = (/** @type {{ target: { value: any; }; }} */ event) => {
		const value = event.target.value;

		initActiveNodes(value);
	};

	const initActiveNodes = (/** @type {any} */ value) => {
		const panel = Array.from(document.querySelectorAll('mdui-tab-panel'))
			// @ts-ignore
			.filter((panel) => panel.value === value)
			.at(0);

		activeNodes = [...nodes].filter((node) => {
			if (panel) {
				return panel.contains(node) || node.tagName === 'H1';
			}
		});
	};
</script>

<div class="navigation">
	<List>
		{#each activeNodes as node}
			{#if node.tagName === 'H1'}
				<ListItem href="#{node.id}">
					<span class="h1">{node.textContent}</span>
				</ListItem>
			{:else if node.tagName === 'H2'}
				<ListItem href="#{node.id}" class="lh2">
					<span class="h2">{node.textContent}</span>
				</ListItem>
			{:else}
				<ListItem href="#{node.id}" class="lh3">
					<span class="h3">{node.textContent}</span>
				</ListItem>
			{/if}
		{/each}
	</List>

	<style>
		.lh3 {
			border-left: 0.0625rem solid rgb(var(--mdui-color-surface-variant));
			margin-left: 1.25rem;
		}
	</style>
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
