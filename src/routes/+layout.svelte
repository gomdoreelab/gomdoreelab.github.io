<script>
	import { setColorSchemeHTML } from 'gomdoreelab-lib-material-web';

	let { children } = $props();

	const color = '#0099ff';
	setColorSchemeHTML(color);
</script>

{@render children()}

<style>
	@import '/src/app.css';
</style>
