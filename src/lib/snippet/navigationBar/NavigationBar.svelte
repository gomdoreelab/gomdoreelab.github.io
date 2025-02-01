<script>
	// @ts-nocheck
	import { Bar, BarItem, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';

	let { ...props } = $props();
</script>

<Bar value={page.url.pathname} label-visibility="labeled" {...props}>
	<BarItem value="/layout" href="/layout">
		레이아웃
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</BarItem>

	<BarItem value="/components" href="/components">
		컴포넌트
		{#snippet _icon()}
			<Icon slot="icon" name="widgets"></Icon>
		{/snippet}
	</BarItem>

	<BarItem value="/" href="/">
		홈
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</BarItem>

	<BarItem value="/material" href="/material">
		디자인
		{#snippet _icon()}
			<Icon slot="icon" name="draw"></Icon>
		{/snippet}
	</BarItem>

	<BarItem value="/code" href="/code">
		코드
		{#snippet _icon()}
			<Icon slot="icon" name="code"></Icon>
		{/snippet}
	</BarItem>
</Bar>
