<script>
	// @ts-nocheck
	import {
		AppBarTop,
		AppBarTopTitle,
		ButtonIcon,
		Icon,
		Switch,
		Avatar
	} from 'gomdoreelab-lib-material-web';
	import Gomdoreelab from '$lib/snippet/svg/Gomdoreelab.svelte';

	let { appState, target, ...props } = $props();

	let isThemeChecked = $state(appState.theme === 'light' ? false : true);
	let theme = $state(appState.theme);
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

	<Switch
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

		<!-- {#if theme === 'light'}
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
		{/if} -->
	</Switch>
	<!-- <Dropdown>
		{#snippet _trigger()}
			<div slot="trigger">
				<Tooltip content="테마">
					<ButtonIcon>
						<Icon name="wb_sunny--outlined"></Icon>
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
