<script>
	// @ts-nocheck
	import { Prose, Card } from 'gomdoreelab-lib-material-web';

	let { appState, ...props } = $props();
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Compact</h1>
			<p>곰도리연구소에서 정한 규칙을 문서로 관리해요.</p>

			<h2>리소스</h2>
			<article class="cards">
				{#if ['compact', 'medium'].includes(breakpoint)}
					<Card href="/layout" style="width: 100%; height: 100%; margin-bottom: 0.5rem;">
						<div class="card">
							<h3>레이아웃</h3>
							<p>사용자 디바이스에 맞는 화면 구성 템플릿</p>
						</div>
					</Card>

					<Card href="/components" style="width: 100%; height: 100%; margin-bottom: 0.5rem;">
						<div class="card">
							<h3>컴포넌트</h3>
							<p>화면 구성에 필요한 버튼, 카드 등 변경 가능한 요소</p>
						</div>
					</Card>

					<Card href="/material" style="width: 100%; height: 100%; margin-bottom: 0.5rem;">
						<div class="card">
							<h3>디자인</h3>
							<p>머티리얼 디자인에서 배운 중요한 디자인 요소</p>
						</div>
					</Card>

					<Card href="/code" style="width: 100%; height: 100%; margin-bottom: 0.5rem;">
						<div class="card">
							<h3>코드</h3>
							<p>코드 작성 시 지켜야하는 규칙</p>
						</div>
					</Card>
				{:else}
					<Card
						href="/layout"
						style="width: calc(50% - 0.5rem); height: 100%; margin-bottom: 0.5rem; margin-right: 0.5rem;"
					>
						<div class="card">
							<h3>레이아웃</h3>
							<p>사용자 디바이스에 맞는 화면 구성 템플릿</p>
						</div>
					</Card>

					<Card
						href="/components"
						style="width: calc(50% - 0.5rem); height: 100%, 100%); margin-bottom: 0.5rem;"
					>
						<div class="card">
							<h3>컴포넌트</h3>
							<p>화면 구성에 필요한 버튼, 카드 등 변경 가능한 요소</p>
						</div>
					</Card>

					<Card
						href="/material"
						style="width: calc(50% - 0.5rem); height: 100%; margin-bottom: 0.5rem; margin-right: 0.5rem;"
					>
						<div class="card">
							<h3>디자인</h3>
							<p>머티리얼 디자인에서 배운 중요한 디자인 요소</p>
						</div>
					</Card>

					<Card
						href="/code"
						style="width: calc(50% - 0.5rem); height: 100%; margin-bottom: 0.5rem;"
					>
						<div class="card">
							<h3>코드</h3>
							<p>코드 작성 시 지켜야하는 규칙</p>
						</div>
					</Card>
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
