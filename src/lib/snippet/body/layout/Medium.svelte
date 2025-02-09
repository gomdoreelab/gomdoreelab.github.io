<script>
	// @ts-nocheck
	import {
		AppBarTop,
		AppBarTopTitle,
		Bar,
		Rail,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import { Medium, MediumTP } from 'gomdoreelab-lib-grid-web';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		import: `import { Medium } from 'gomdoreelab-lib-grid-web';`,
		example: `<Medium>
	{#snippet _header()}
		<AppBarTop class="demo-top-app-bar">
			<AppBarTopTitle>TopAppBar</AppBarTopTitle>
		</AppBarTop>
	{/snippet}
	
	{#snippet _body()}
		<div style="height: 100%; width: 100%;">Main</div>
	{/snippet}
	
	{#snippet _rail()}
		<Rail class="demo-navigation-rail">Rail</Rail>
	{/snippet}
</Medium>`,
		importTP: `import { MediumTP } from 'gomdoreelab-lib-grid-web';`,
		exampleTP: `<MediumTP>
		{#snippet _header()}
			<AppBarTop class="demo-top-app-bar">
				<AppBarTopTitle>TopAppBar</AppBarTopTitle>
			</AppBarTop>
		{/snippet}

		{#snippet _body()}
			<div style="height: 100%;">Main</div>
		{/snippet}

		{#snippet _complement()}
			<div class="demo-complement">Complement</div>
		{/snippet}

		{#snippet _footer()}
			<Bar class="demo-navigation-bar">NavigationBar</Bar>
		{/snippet}
	</MediumTP>
</div>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Medium</h1>
			<p>
				화면 크기가 600px 이상 840px 미만인 디바이스를 사용할 때 적합해요. 창의 개수에 따라 구조가
				달라져요.
			</p>

			<Tabs full-width value="Medium" style="margin-top: 3rem;">
				<Tab value="Medium">1개</Tab>
				<Tab value="Medium-Two-Pane">2개</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Medium">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={codes.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>_header</code>, <code>_body</code>, <code>_rail</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="padding: 1rem;">
											<Medium style="height: 270px;">
												{#snippet _header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet _body()}
													<div
														style="height: 100%; width: calc(100% - 0.375rem * 2); padding: 0.375rem;"
													>
														Main
													</div>
												{/snippet}

												{#snippet _rail()}
													<Rail class="demo-navigation-rail">Rail</Rail>
												{/snippet}
											</Medium>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												padding-left: 1.5rem;
												z-index: 1900;
											}

											.demo-navigation-rail {
												background-color: rgb(var(--mdui-color-surface-container-low));
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={codes.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/foundations/layout/applying-layout/medium"
								>
									Applying layout - Medium
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

					<TabPanel slot="panel" value="Medium-Two-Pane">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={codes.importTP}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>_header</code>, <code>_body</code>, <code>_complement</code>,
									<code>_footer</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="padding: 1rem; min-width: 700px;">
											<MediumTP style="height: 270px; width: 100%;">
												{#snippet _header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet _body()}
													<div style="height: 100%; padding: 1.5rem;">Main</div>
												{/snippet}

												{#snippet _complement()}
													<div class="demo-complement">Complement</div>
												{/snippet}

												{#snippet _footer()}
													<Bar class="demo-navigation-bar">NavigationBar</Bar>
												{/snippet}
											</MediumTP>
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
												width: 100% !important;
												padding: 1.5rem;
												z-index: 1900;
											}

											mdui-layout-item {
												width: calc(100% / 2) !important;
											}

											complement {
												width: 100%;
											}

											.demo-complement {
												background-color: rgb(var(--mdui-color-surface-container-high));
												padding: 1.5rem;
												height: calc(100% - 1.5rem * 2);
												width: calc(100% - 1.5rem * 2);
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={codes.exampleTP}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/foundations/layout/applying-layout/medium"
								>
									Applying layout - Medium
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
												<td><code>_complement</code></td>
												<td>본문 보조</td>
											</tr>
											<tr>
												<td><code>_footer</code></td>
												<td>하단 네비게이션 - NavigationBar</td>
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
												<td><code>_body</code></td>
												<td><code>window.innerWidth / 2</code></td>
											</tr>
											<tr>
												<td><code>_complement</code></td>
												<td><code>window.innerWidth / 2</code></td>
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
			previous={{ href: '/layout/compact', title: '레이아웃: Compact' }}
			next={{ href: '/layout/expanded', title: '레이아웃: Expanded' }}
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
