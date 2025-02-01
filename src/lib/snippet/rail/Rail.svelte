<script>
	// @ts-nocheck
	import { Rail, RailItem, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';

	let { ...props } = $props();
</script>

<Rail value={page.url.pathname} {...props}>
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
