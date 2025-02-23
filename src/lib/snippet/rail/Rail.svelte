<script>
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
	onclose={(/** @type {{ target: { tagName: string; }; }} */ event) => {
		// 아이템에서 이벤트 전파되는건 빼고!
		if (event.target.tagName === 'MDUI-NAVIGATION-DRAWER') {
			isDrawerOpen = false;
		}
	}}
/>

<Rail value={page.url.pathname} {...props}>
	<ButtonIcon slot="top" onclick={() => (isDrawerOpen = true)}>
		<Icon name="menu" />
	</ButtonIcon>

	<RailItem value="/" href="/">
		홈

		{#snippet image()}
			<Icon slot="icon" name="home" />
		{/snippet}
		{@render image()}
	</RailItem>

	<RailItem value="/layout" href="/layout">
		레이아웃

		{#snippet image()}
			<Icon slot="icon" name="view_sidebar" />
		{/snippet}
		{@render image()}
	</RailItem>

	<RailItem value="/components" href="/components">
		컴포넌트

		{#snippet image()}
			<Icon slot="icon" name="widgets" />
		{/snippet}
		{@render image()}
	</RailItem>

	<RailItem value="/functions" href="/functions">
		함수

		{#snippet image()}
			<Icon slot="icon" name="functions" />
		{/snippet}
		{@render image()}
	</RailItem>

	<RailItem value="/material" href="/material">
		디자인

		{#snippet image()}
			<Icon slot="icon" name="draw" />
		{/snippet}
		{@render image()}
	</RailItem>

	<RailItem value="/code" href="/code">
		코드

		{#snippet image()}
			<Icon slot="icon" name="code" />
		{/snippet}
		{@render image()}
	</RailItem>
</Rail>
