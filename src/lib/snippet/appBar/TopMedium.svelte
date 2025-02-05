<script>
	// @ts-nocheck
	import {
		AppBarTop,
		AppBarTopTitle,
		ButtonIcon,
		Icon,
		Switch,
		Avatar,
		Card,
		Dropdown,
		Tooltip,
		Menu,
		MenuItem,
		Slider
	} from 'gomdoreelab-lib-material-web';
	import Gomdoreelab from '$lib/snippet/svg/Gomdoreelab.svelte';
	import { onMount } from 'svelte';

	let { appState, target, ...props } = $props();

	let isThemeChecked = $state(appState.theme === 'light' ? false : true);
	let theme = $state(appState.theme);
	let isSnackbarOpen = $state(false);

	onMount(() => {
		const slider = document.querySelector('#contrast-slider');
		slider.labelFormatter = (value) =>
			Number(value) === 0 ? '기본' : Number(value) === 0.5 ? '중간' : '높음';
	});
</script>

<AppBarTop variant="medium" scroll-behavior="shrink elevate" scroll-target={target} {...props}>
	<ButtonIcon href="/">
		{@const root = document.querySelector(':root')}

		{#if appState.theme === 'light'}
			{@const background = `rgb(${root.style.getPropertyValue('--mdui-color-on-surface-light')})`}
			{@const color = `rgb(${root.style.getPropertyValue('--mdui-color-surface-light')})`}

			<Gomdoreelab {background} {color} width="24px" />
		{:else}
			{@const background = `rgb(${root.style.getPropertyValue('--mdui-color-on-surface-dark')})`}
			{@const color = `rgb(${root.style.getPropertyValue('--mdui-color-surface-dark')})`}

			<Gomdoreelab {background} {color} width="24px" />
		{/if}
	</ButtonIcon>
	<AppBarTopTitle>곰도리연구소</AppBarTopTitle>

	<Dropdown>
		{@const color = appState.color}

		{#snippet _trigger()}
			<div slot="trigger">
				<Tooltip content="대비">
					<ButtonIcon>
						<Icon name="contrast"></Icon>
					</ButtonIcon>
				</Tooltip>
			</div>
		{/snippet}
		<Card style="width: 200px; height: 100%;">
			<div class="card">
				<span>대비</span>
				<Slider
					id="contrast-slider"
					min="0"
					max="1"
					step="0.5"
					value={appState.contrast}
					onchange={(event) => {
						appState.setColor(color, event.target.value);
					}}
				></Slider>
				<!-- <SegmentedButtonGroup
					full-width
					selects="single"
					value={appState.contrast.toString()}
					onclick={(event) => {
						console.log(appState.contrast, event.target.value);

						if (appState.contrast.toString() === event.target.value) {
							if (event.target.value === '0') {
								return;
							}

							isSnackbarOpen = true;

							// 초기화
							appState.setColor(color, 0);

							console.log(appState.contrast);
						} else {
							appState.setColor(color, Number(event.target.value));
						}
					}}
				>
					<SegmentedButton value={'0'}>기본</SegmentedButton>
					<SegmentedButton value={'0.5'}>중간</SegmentedButton>
					<SegmentedButton value={'1'}>높음</SegmentedButton>
				</SegmentedButtonGroup> -->
			</div>
		</Card>
	</Dropdown>
	<Tooltip content="테마">
		<ButtonIcon
			onclick={() => {
				appState.setTheme(appState.theme === 'light' ? 'dark' : 'light');
			}}
		>
			<Icon name={appState.theme === 'light' ? 'highlight' : 'nightlight'}></Icon>
		</ButtonIcon>
	</Tooltip>

	<!-- <Switch
			class="switch"
			checked={isThemeChecked}
			value={theme}
			onchange={() => {
				theme = theme === 'light' ? 'dark' : 'light';
				appState.setTheme(theme);
			}}
		>
			{#snippet _checkedIcon()}
				<Icon slot="checked-icon" name="nightlight"></Icon>
			{/snippet}
			{#snippet _uncheckedIcon()}
				<Icon slot="unchecked-icon" name="highlight"></Icon>
			{/snippet}

			{#if theme === 'light'}
				<style>
					.switch::part(track) {
						/* background-color: yellow; */
					}
				</style>
			{:else}
				<style>
					.switch::part(track) {
					}
				</style>
			{/if}
		</Switch>

		<Dropdown>
			{#snippet _trigger()}
				<div slot="trigger">
					<Tooltip content="설정">
						<ButtonIcon>
							<Icon name="settings"></Icon>
						</ButtonIcon>
					</Tooltip>
				</div>
			{/snippet}
			<Menu
				selects="single"
				value={appState.theme}
				onchange={(event) => appState.setTheme(event.target.value)}
			>
				<MenuItem value="light">Light</MenuItem>
				<MenuItem value="dark">Dark</MenuItem>
			</Menu>
		</Dropdown> -->
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
