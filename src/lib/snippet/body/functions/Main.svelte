<script>
	// @ts-nocheck
	import { Prose, Card } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>함수: 개요</h1>
			<p>화면 구성에 보편적으로 사용하는 기능을 제공해요.</p>

			<h2>사용법</h2>
			<p>라이브러리를 설치해주세요:</p>

			<article>
				<Code {theme} lang="bash" text={'npm install gomdoreelab-lib-material-web'}></Code>
			</article>

			<h2>특징</h2>
			<article>
				<ul>
					<li>페이지에 대한 테마 변경, 색상 변경 등의 기능이 있어요.</li>
					<li>레이아웃 및 컴포넌트와 같은 디자인 토큰을 사용하고 있어요.</li>
				</ul>
			</article>

			<NavigationCard
				previous={{ href: '/components/tooltips', title: '컴포넌트: Tooltips' }}
				next={{ href: '/functions/theme', title: '함수: 테마' }}
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
