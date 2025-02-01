<script>
	import { setColorSchemeHTML } from 'gomdoreelab-lib-material-web';

	let { children } = $props();

	// 초기 색상 설정
	const color = '#0099ff';
	setColorSchemeHTML(color);
</script>

{@render children()}

<style>
	@import '/src/app.css';
</style>
