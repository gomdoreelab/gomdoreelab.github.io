<script>
	// @ts-nocheck
	import { ButtonIcon, Icon, Snackbar, Tooltip } from 'gomdoreelab-lib-material-web';
	import { Highlight, HighlightSvelte } from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import json from 'svelte-highlight/languages/json';
	import bash from 'svelte-highlight/languages/bash';
	import css from 'svelte-highlight/languages/css';
	import plaintext from 'svelte-highlight/languages/plaintext';
	import github from 'svelte-highlight/styles/github';
	import githubDark from 'svelte-highlight/styles/github-dark';

	let { lang, text, theme } = $props();

	let isSnackbarOpen = $state(false);

	const copyTextToClipboard = async (content) => {
		await navigator.clipboard.writeText(content);

		isSnackbarOpen = true;
	};
</script>

<svelte:head>
	{#if theme === 'light'}
		{@html github}
	{:else}
		{@html githubDark}
	{/if}
</svelte:head>

<Snackbar open={isSnackbarOpen} onclose={() => (isSnackbarOpen = false)}>
	코드를 복사했어요
</Snackbar>

<div class="code">
	<div class="icons">
		<section>
			<span class="title">{lang}</span>
		</section>
		<section>
			<Tooltip content="복사">
				<ButtonIcon onclick={async () => await copyTextToClipboard(text.replaceAll('\t', '  '))}>
					<Icon name="content_copy"></Icon>
				</ButtonIcon>
			</Tooltip>
		</section>
	</div>

	{#if lang === 'svelte'}
		<HighlightSvelte code={text.replaceAll('\t', '  ')} />
	{:else if lang === 'json'}
		<Highlight language={json} code={text.replaceAll('\t', '  ')} />
	{:else if lang === 'javascript'}
		<Highlight language={javascript} code={text.replaceAll('\t', '  ')} />
	{:else if lang === 'css'}
		<Highlight language={css} code={text.replaceAll('\t', '  ')} />
	{:else if lang === 'bash'}
		<Highlight language={bash} code={text.replaceAll('\t', '  ')} />
	{:else}
		<Highlight language={plaintext} code={text.replaceAll('\t', '  ')} />
	{/if}

	<style>
		.mdui-prose pre {
			margin-top: 0;
			margin-bottom: 0;
		}
	</style>
</div>

<style>
	.code {
		background-color: rgb(var(--mdui-color-surface-container-high));
		border-radius: var(--mdui-shape-corner-extra-small);
	}

	.icons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		height: 100%;

		& section {
			width: 100%;
		}

		& section:nth-of-type(2) {
			display: flex;
			justify-content: right;
		}

		& .title {
			font-size: var(--mdui-typescale-title-medium-size);
			font-weight: var(--mdui-typescale-title-medium-weight);
		}
	}
</style>
