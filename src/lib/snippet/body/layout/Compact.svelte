<script>
	// @ts-nocheck
	import { Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		import: `import { Compact } from 'gomdoreelab-lib-grid-web';`,
		example: `<Compact>
  {#snippet _header()}
		<TopMediumAppBar />
	{/snippet}
	{#snippet _body()}
		<Body />
	{/snippet}
	{#snippet _footer()}
		<NavigationBar />
	{/snippet}
</Compact>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Compact</h1>
			<p>화면 크기가 600px 미만인 디바이스를 사용할 때 적합해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={codes.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<ul>
				<li>
					항상 <code>_header</code>, <code>_body</code>, <code>_footer</code> snippet을 전부 사용해주세요.
				</li>
			</ul>
			<article>
				<Code {theme} lang="svelte" text={codes.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a href="https://m3.material.io/foundations/layout/applying-layout/compact">
					Applying layout - Compact
				</a>를 참고해주세요.
			</p>

			<h2>Snippets</h2>
			<article>
				<Table>
					<table>
						<thead>
							<tr>
								<th>이름</th>
								<th>설명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>_header</code></td>
								<td>상단 네비게이션 - TopAppBar<sup>*</sup></td>
							</tr>
							<tr>
								<td><code>_body</code></td>
								<td>본문</td>
							</tr>
							<tr>
								<td><code>_footer</code></td>
								<td>하단 네비게이션 - NavigationBar</td>
							</tr>
						</tbody>
					</table>
				</Table>

				<p class="information">* TopAppBar는 크기(Small, Medium, Large)의 제한이 없어요.</p>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/layout', title: '레이아웃: 개요' }}
			next={{ href: '/layout/medium', title: '레이아웃: Medium' }}
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

	.information {
		font-size: var(--mdui-typescale-body-medium-size);
		font-weight: var(--mdui-typescale-body-medium-weight);
		line-height: var(--mdui-typescale-body-medium-line-height);
		letter-spacing: var(--mdui-typescale-body-medium-tracking);
	}
</style>
