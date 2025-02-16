<script>
	// @ts-nocheck
	import { ButtonIcon, Rail, RailItem, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';
	import Drawer from '$lib/snippet/drawer/Drawer.svelte';

	let { ...props } = $props();
	let isDrawerOpen = $state(false);
</script>

<Drawer
	open={isDrawerOpen}
	modal
	close-on-esc
	close-on-overlay-click
	onclose={(event) => {
		// 아이템에서 이벤트 전파되는건 빼고!
		if (event.target.tagName === 'MDUI-NAVIGATION-DRAWER') {
			isDrawerOpen = false;
		}
	}}
/>

<Rail value={page.url.pathname} {...props}>
	{#snippet _top()}
		<ButtonIcon slot="top" onclick={() => (isDrawerOpen = true)}>
			<Icon name="menu"></Icon>
		</ButtonIcon>
	{/snippet}

	<RailItem value="/" href="/">
		홈
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</RailItem>

	<RailItem value="/layout" href="/layout">
		레이아웃
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</RailItem>

	<RailItem value="/components" href="/components">
		컴포넌트
		{#snippet _icon()}
			<Icon slot="icon" name="widgets"></Icon>
		{/snippet}
	</RailItem>

	<RailItem value="/functions" href="/functions">
		함수
		{#snippet _icon()}
			<Icon slot="icon" name="functions"></Icon>
		{/snippet}
	</RailItem>

	<RailItem value="/material" href="/material">
		디자인
		{#snippet _icon()}
			<Icon slot="icon" name="draw"></Icon>
		{/snippet}
	</RailItem>

	<RailItem value="/code" href="/code">
		코드
		{#snippet _icon()}
			<Icon slot="icon" name="code"></Icon>
		{/snippet}
	</RailItem>
</Rail>
