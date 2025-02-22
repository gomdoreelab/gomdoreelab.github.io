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
		<Icon slot="icon" name="home" />
	</RailItem>

	<RailItem value="/layout" href="/layout">
		레이아웃
		<Icon slot="icon" name="view_sidebar" />
	</RailItem>

	<RailItem value="/components" href="/components">
		컴포넌트
		<Icon slot="icon" name="widgets" />
	</RailItem>

	<RailItem value="/functions" href="/functions">
		함수
		<Icon slot="icon" name="functions" />
	</RailItem>

	<RailItem value="/material" href="/material">
		디자인
		<Icon slot="icon" name="draw" />
	</RailItem>

	<RailItem value="/code" href="/code">
		코드
		<Icon slot="icon" name="code" />
	</RailItem>
</Rail>
