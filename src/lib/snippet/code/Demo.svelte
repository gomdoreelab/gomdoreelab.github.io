<script>
	let { height = '300px', _html, _style } = $props();
</script>

<div class="demo" style:height>
	{@render _html?.()}
	{@render _style?.()}
</div>

<style>
	.demo {
		border: 0.0625rem solid rgb(var(--mdui-color-surface-variant));
		border-radius: var(--mdui-shape-corner-extra-small);
		margin-bottom: 0.5rem;
		overflow-y: hidden;
	}
</style>
