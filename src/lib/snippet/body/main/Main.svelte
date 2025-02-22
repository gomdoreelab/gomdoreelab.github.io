<script>
	// @ts-nocheck
	import { Prose, Card } from 'gomdoreelab-lib-material-web';

	let { appState, ...props } = $props();

	const cards = [
		{ href: '/layout', title: '레이아웃', description: '사용자 디바이스에 맞는 화면 구성 템플릿' },
		{
			href: '/components',
			title: '컴포넌트',
			description: '화면 구성에 필요한 버튼, 카드 등 변경 가능한 요소'
		},
		{ href: '/functions', title: '함수', description: '화면 구성에 보편적으로 사용하는 기능' },
		{
			href: '/material',
			title: '디자인',
			description: '머티리얼 디자인에서 배운 중요한 디자인 요소'
		},
		{ href: '/codes', title: '코드', description: '코드 작성 시 지켜야하는 규칙' }
	];
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>문서</h1>
			<p>곰도리연구소에서 정한 규칙을 문서로 관리해요.</p>

			<h2>리소스</h2>
			<article class="cards">
				{#if ['compact', 'medium'].includes(breakpoint)}
					{#each cards as card}
						<Card href={card.href} style="width: 100%; height: 100%; margin-bottom: 0.5rem;">
							<div class="card">
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</div>
						</Card>
					{/each}
				{:else}
					{#each cards as card, index}
						{@const style = 'width: calc(50% - 1rem); height: 100%; margin-bottom: 0.5rem;'}
						<Card href={card.href} style={index % 2 === 1 ? style : style + 'margin-right: 1rem;'}>
							<div class="card">
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</div>
						</Card>
					{/each}
				{/if}
			</article>
		</section>

		<section></section>
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

	.card {
		padding: 2rem;
	}
</style>
