<script>
	import {
		AppBarTop,
		AppBarTopTitle,
		ButtonIcon,
		Icon,
		Card,
		Dropdown,
		Tooltip,
		Slider
	} from 'gomdoreelab-lib-material-web';
	import Drawer from '$lib/snippet/drawer/Drawer.svelte';
	import Gomdoreelab from '$lib/snippet/svg/Gomdoreelab.svelte';
	import { onMount } from 'svelte';

	let { appState, target, ...props } = $props();
	let isDrawerOpen = $state(false);

	/** @type {HTMLElement | null} */
	const root = document.querySelector(':root');

	onMount(() => {
		const slider = document.querySelector('#contrast-slider');

		if (slider) {
			// @ts-ignore
			slider.labelFormatter = (value) =>
				Number(value) === 0 ? '기본' : Number(value) === 0.5 ? '중간' : '높음';
		}
	});
</script>

<Drawer
	open={isDrawerOpen}
	modal
	close-on-esc
	close-on-overlay-click
	onclose={(/** @type {{ target: { tagName: string; }; }} */ event) => {
		// 아이템에서 이벤트 전파되는건 빼고!
		if (event.target.tagName === 'MDUI-NAVIGATION-DRAWER') {
			isDrawerOpen = false;
		}
	}}
/>

<AppBarTop variant="medium" scroll-behavior="shrink elevate" scroll-target={target} {...props}>
	{#if appState.breakpoint === 'compact'}
		<ButtonIcon onclick={() => (isDrawerOpen = true)}>
			<Icon name="menu"></Icon>
		</ButtonIcon>
	{:else}
		<ButtonIcon href="/">
			{#if root}
				{#if appState.theme === 'light'}
					{@const background = `rgb(${root.style.getPropertyValue('--mdui-color-on-surface-light')})`}
					{@const color = `rgb(${root.style.getPropertyValue('--mdui-color-surface-light')})`}

					<Gomdoreelab {background} {color} width="24px" />
				{:else}
					{@const background = `rgb(${root.style.getPropertyValue('--mdui-color-on-surface-dark')})`}
					{@const color = `rgb(${root.style.getPropertyValue('--mdui-color-surface-dark')})`}

					<Gomdoreelab {background} {color} width="24px" />
				{/if}
			{/if}
		</ButtonIcon>
	{/if}
	<AppBarTopTitle>곰도리연구소</AppBarTopTitle>

	<Dropdown>
		{@const color = appState.color}

		{#snippet button()}
			<div slot="trigger">
				<Tooltip content="대비">
					<ButtonIcon>
						<Icon name="contrast" />
					</ButtonIcon>
				</Tooltip>
			</div>
		{/snippet}
		{@render button()}

		<Card style="width: 200px; height: 100%;">
			<div class="card">
				<span>대비</span>
				<Slider
					id="contrast-slider"
					min="0"
					max="1"
					step="0.5"
					value={appState.contrast}
					onchange={(/** @type {{ target: { value: any; }; }} */ event) => {
						appState.setColor(color, event.target.value);
					}}
				/>
			</div>
		</Card>
	</Dropdown>

	<Tooltip content="테마">
		<ButtonIcon
			onclick={() => {
				appState.setTheme(appState.theme === 'light' ? 'dark' : 'light');
			}}
		>
			<Icon name={appState.theme === 'light' ? 'highlight' : 'nightlight'} />
		</ButtonIcon>
	</Tooltip>
</AppBarTop>

<style>
	.card {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 1rem;
	}

	.card > span {
		line-height: var(--mdui-typescale-title-medium-line-height);
		font-size: var(--mdui-typescale-title-medium-size);
		letter-spacing: var(--mdui-typescale-title-medium-tracking);
		font-weight: var(--mdui-typescale-title-medium-weight);
		padding: 0 0.75rem;
	}
</style>
