<script>
	// @ts-nocheck
	import {
		AppBarTop,
		AppBarTopTitle,
		Bar,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import { Compact, CompactLong } from 'gomdoreelab-lib-grid-web';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const compact = {
		import: `import { Compact } from 'gomdoreelab-lib-grid-web';`,
		example: `<Compact>
	{#snippet _header()}
		<AppBarTop>
			<AppBarTopTitle>TopAppBar</AppBarTopTitle>
		</AppBarTop>
	{/snippet}
	
	{#snippet _body()}
		<div style="height: 100%; width: 100%;">Main</div>
	{/snippet}
	
	{#snippet _footer()}
		<Bar>NavigationBar</Bar>
	{/snippet}
</Compact>`
	};

	const long = {
		import: `import { CompactLong } from 'gomdoreelab-lib-grid-web';`,
		example: `<CompactLong>
	{#snippet _header()}
		<AppBarTop>
			<AppBarTopTitle>TopAppBar</AppBarTopTitle>
		</AppBarTop>
	{/snippet}
	
	{#snippet _body()}
		<div style="height: 100%; width: 100%;">Main</div>
	{/snippet}
</CompactLong>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Compact</h1>
			<p>
				화면 크기가 600px 미만인 디바이스를 사용할 때 적합해요. 하단 네비게이션을 사용하는지에 따라
				구분하고 있어요.
			</p>

			<Tabs full-width value="CompactLong" style="margin-top: 3rem;">
				<Tab value="Compact">사용</Tab>
				<Tab value="CompactLong">미사용</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Compact">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={compact.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>_header</code>, <code>_body</code>, <code>_footer</code> snippet을 전부
									사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="padding: 1rem;">
											<Compact style="height: 270px;">
												{#snippet _header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet _body()}
													<div style="height: 100%; width: 100%; padding: 0.5rem;">Main</div>
												{/snippet}

												{#snippet _footer()}
													<Bar class="demo-navigation-bar">NavigationBar</Bar>
												{/snippet}
											</Compact>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												z-index: 1900;
											}

											.demo-navigation-bar {
												background-color: rgb(var(--mdui-color-surface-container-low));
												padding: 0.5rem;
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={compact.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/foundations/layout/applying-layout/compact"
								>
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
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="CompactLong">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={long.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>_header</code>, <code>_body</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="padding: 1rem;">
											<CompactLong style="height: 270px;">
												{#snippet _header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet _body()}
													<div style="height: 100%; width: calc(100% - 1rem); padding: 0.5rem;">
														Main
													</div>
												{/snippet}
											</CompactLong>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={long.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/foundations/layout/applying-layout/compact"
								>
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
										</tbody>
									</table>
								</Table>

								<p class="information">* TopAppBar는 크기(Small, Medium, Large)의 제한이 없어요.</p>
							</article>
						</div>
					</TabPanel>
				{/snippet}
			</Tabs>
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

	.panel {
		padding: 2rem 1rem;
	}
</style>
