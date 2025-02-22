<script>
	import { Bar, BarItem, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';

	let { ...props } = $props();
</script>

<Bar value={page.url.pathname} label-visibility="labeled" {...props}>
	<BarItem value="/layout" href="/layout">
		레이아웃
		<Icon slot="icon" name="view_sidebar" />
	</BarItem>

	<BarItem value="/components" href="/components">
		컴포넌트
		<Icon slot="icon" name="widgets" />
	</BarItem>

	<BarItem value="/" href="/">
		홈
		<Icon slot="icon" name="home" />
	</BarItem>

	<BarItem value="/material" href="/material">
		디자인
		<Icon slot="icon" name="draw" />
	</BarItem>

	<BarItem value="/code" href="/code">
		코드
		<Icon slot="icon" name="code" />
	</BarItem>
</Bar>
