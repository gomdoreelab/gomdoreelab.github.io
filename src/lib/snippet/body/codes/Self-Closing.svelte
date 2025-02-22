<script>
	import { Prose, Chip } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		example: `// 권장
<Code />

// 권장하지 않음
<Code></Code>
`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>코드: Self-Closing</h1>
			<div class="title-chips">
				<Chip href="/codes#svelte">#Svelte</Chip>
			</div>

			<p>태그 또는 컴포넌트를 사용할 때 자식 요소를 갖지 않는 경우 스스로 닫을 수 있어요.</p>

			<h2>사용법</h2>
			<p>자식 요소가 없는 경우 태그 또는 컴포넌트를 직접 닫으세요.</p>
			<article>
				<Code {theme} lang="svelte" text={codes.example} />
			</article>

			<NavigationCard
				previous={{ href: '/codes/on-mount', title: '코드: onMount' }}
				next={{ href: '/codes/snippet', title: '코드: Snippet' }}
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
