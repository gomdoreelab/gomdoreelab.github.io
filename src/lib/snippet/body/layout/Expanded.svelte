<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		import: `import { Expanded } from 'gomdoreelab-lib-grid-web';`,
		example: `<Expanded>
	{#snippet _header()}
		<TopMediumAppBar />
	{/snippet}
	{#snippet _body()}
		<Body />
	{/snippet}
	{#snippet _rail()}
		<Rail />
	{/snippet}
</Expanded>`,
		importTP: `import { ExpandedTP } from 'gomdoreelab-lib-grid-web';`,
		exampleTP: `<ExpandedTP placement="left">
	{#snippet _header()}
		<TopSmallAppBar />
	{/snippet}
	{#snippet _body()}
		<Body />
	{/snippet}
	{#snippet _complement()}
		<Complement />
	{/snippet}	
	{#snippet _rail()}
		<Rail />
	{/snippet}
</ExpandedTP>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Expanded</h1>
			<p>
				화면 크기가 840px 이상 1200px 미만인 디바이스를 사용할 때 적합해요. 창의 개수에 따라 구조가
				달라져요.
			</p>

			<Tabs full-width value="Expanded" style="margin-top: 3rem;">
				<Tab value="Expanded">1개</Tab>
				<Tab value="Expanded-Two-Pane">2개</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Expanded">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={codes.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>_header</code>, <code>_body</code>, <code>_rail</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Code {theme} lang="svelte" text={codes.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a href="https://m3.material.io/foundations/layout/applying-layout/expanded">
									Applying layout - Expanded
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
												<td><code>_rail</code></td>
												<td>사이드 네비게이션 - Rail</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<p class="information">* TopAppBar는 크기(Small, Medium, Large)의 제한이 없어요.</p>
							</article>
						</div>
					</TabPanel>
					<TabPanel slot="panel" value="Expanded-Two-Pane">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={codes.importTP}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>_header</code>, <code>_body</code>, <code>_complement</code>,
									<code>_rail</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Code {theme} lang="svelte" text={codes.exampleTP}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a href="https://m3.material.io/foundations/layout/applying-layout/expanded">
									Applying layout - Expanded
								</a>를 참고해주세요.
							</p>

							<h2>Properties</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>이름</th>
												<th>설명</th>
												<th>타입</th>
												<th>기본값</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>placement</td>
												<td><code>_complement</code> Snippet 위치</td>
												<td><code>'left' | 'right'</code></td>
												<td><code>'left'</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

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
												<td><code>_complement</code></td>
												<td>본문 보조</td>
											</tr>
											<tr>
												<td><code>_rail</code></td>
												<td>사이드 네비게이션 - Rail</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<p class="information">* TopAppBar는 크기는 Small만 사용할 수 있어요.</p>
							</article>

							<h2>창(Pane)</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>이름</th>
												<th>가로 크기</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><code>_complement</code></td>
												<td><code>360px</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/layout/medium', title: '레이아웃: Medium' }}
			next={{ href: '/layout/large', title: '레이아웃: Large' }}
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

	.panel {
		padding: 2rem 1rem;
	}
</style>
