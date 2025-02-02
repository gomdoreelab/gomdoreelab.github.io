<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const badge = {
		import: `import { Badge } from 'gomdoreelab-lib-material-web';`,
		example: `<Badge>12</Badge>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Badges</h1>
			<p>내비게이션 항목과 아이콘에 알림, 개수 또는 상태 정보를 표시하는데 쓰여요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={badge.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Code {theme} lang="svelte" text={badge.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a href="https://m3.material.io/components/badges/overview"> Metrial - Badges </a>와
				<a href="https://www.mdui.org/en/docs/2/components/badge"> MDUI - Badge </a>를 참고해주세요.
			</p>
		</section>

		<NavigationCard
			previous={{ href: '/components/app-bar', title: '컴포넌트: App bars' }}
			next={{ href: '/components/buttons', title: '컴포넌트: Buttons' }}
		/>
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
