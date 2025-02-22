<script>
	import { Card, Prose } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const card = {
		import: `import { Card } from 'gomdoreelab-lib-material-web';`,
		example: `<Card style="width: 200px; height: 200px;">
	<div class="card">
		...
	</div>
</Card>`,
		grid: `<section class="nav">
	<Card style="height: 100px;">
		<div class="card">Card 1</div>
	</Card>
	<Card style="height: 100px;">
		<div class="card">Card 2</div>
	</Card>
</section>`,
		gridCss: `.nav {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1rem;
}`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Cards</h1>
			<p>카드는 단일 주제에 대한 내용과 동작을 표시해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={card.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Card style="width: 200px; height: 200px;">
								<div class="card">Card</div>
							</Card>
						</div>
					{/snippet}

					{#snippet style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}

							.card {
								padding: 1rem;
							}
						</style>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={card.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/cards/overview">
					Metrial - Cards
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/card"> MDUI - Card </a>를
				참고해주세요.
			</p>

			<h2>예시</h2>
			<h3>Grid</h3>
			<p>
				카드를 감싸는 컨테이너를 <code>Grid</code>로 설정하는 것도 좋아요. 카드 배치와 잘 어울리는
				형태에요.
			</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<section class="nav">
								<Card style="height: 100px;"><div class="card">Card 1</div></Card>
								<Card style="height: 100px;"><div class="card">Card 2</div></Card>
							</section>
						</div>
					{/snippet}

					{#snippet style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}

							.nav {
								display: grid;
								grid-template-columns: repeat(2, 1fr);
								column-gap: 1rem;
								width: 100%;
							}

							.card {
								padding: 1rem;
							}
						</style>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={card.grid}></Code>
			</article>
			<p>
				<code>Grid</code>가 전체 넓이를 가지는 경우에는 별도로 카드에 가로 길이를 설정하지 않아요.
			</p>
			<article>
				<Code {theme} lang="css" text={card.gridCss}></Code>
			</article>

			<p class="information">* 하단 네비게이션을 카드로 작성한 예시였어요.</p>
		</section>

		<NavigationCard
			previous={{ href: '/components/buttons', title: '컴포넌트: Buttons' }}
			next={{ href: '/components/checkbox', title: '컴포넌트: Checkbox' }}
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
