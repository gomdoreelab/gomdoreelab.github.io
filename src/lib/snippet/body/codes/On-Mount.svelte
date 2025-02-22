<script>
	import { Prose, Chip } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		script: `let appState = $state();

// State는 BreakPoint를 통한 적응형 화면 제어를 포함하고 있어요.
onMount(() => {
	appState = new State();
});`,
		example: `{#if appState}
	{@render _breakpoint?.(appState)}
{/if}`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>코드: onMount</h1>
			<div class="title-chips">
				<Chip href="/codes#svelte">#Svelte</Chip>
			</div>

			<p>onMount를 사용하는 특별한 상황이 있어요.</p>

			<h2>Layout</h2>
			<p>
				<code>Layout</code>을 사용할 때 꼭 <code>onMount</code>안에서 사용해야해요. 그렇지않으면
				<code>observerResize</code>관련 에러가 발생해요.
			</p>
			<article>
				<Code {theme} lang="javascript" text={codes.script} />
			</article>

			<p>
				<code>onMount</code>를 사용하기 때문에 조건문으로 <code>appState</code>가 준비될 때까지
				기다려줘요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.example} />
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://svelte.dev/docs/svelte/@render#Optional-snippets">
					Svelte - Optional snippets
				</a>를 참고해주세요. 특히 <code>Fallback</code>부분을 살펴보면 좋아요.
			</p>

			<NavigationCard
				previous={{ href: '/codes', title: '코드: 개요' }}
				next={{ href: '/codes/self-closing', title: '코드: Self-Closing' }}
			/>
		</section>
	</div>
</Prose>

<style>
	.content {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 0 1rem;
	}

	.content > section:first-of-type > h1 {
		color: rgb(var(--mdui-color-primary));
	}
</style>
