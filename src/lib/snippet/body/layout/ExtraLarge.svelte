<script>
	import {
		AppBarTop,
		AppBarTopTitle,
		Drawer,
		Rail,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import { ExtraLarge, ExtraLargeTP, ExtraLargeAP } from 'gomdoreelab-lib-grid-web';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		import: `import { ExtraLarge } from 'gomdoreelab-lib-grid-web';`,
		example: `<ExtraLarge>
	{#snippet header()}
		<AppBarTop class="demo-top-app-bar">
			<AppBarTopTitle>TopAppBar</AppBarTopTitle>
		</AppBarTop>
	{/snippet}

	{#snippet body()}
		<div style="height: 100%; width: 100%;">Main</div>
	{/snippet}

	{#snippet drawer()}
		<Drawer class="demo-navigation-drawer" open="true" contained>
			<div class="some-list">Drawer</div>
		</Drawer>
	{/snippet}
</ExtraLarge>`,
		importTP: `import { ExtraLargeTP } from 'gomdoreelab-lib-grid-web';`,
		exampleTP: `<ExtraLargeTP placement="left">
	{#snippet header()}
		<AppBarTop class="demo-top-app-bar">
			<AppBarTopTitle>TopAppBar</AppBarTopTitle>
		</AppBarTop>
	{/snippet}

	{#snippet body()}
		<div style="height: 100%; width: 100%;">Main</div>
	{/snippet}

	{#snippet complement()}
		<div class="demo-complement">Complement</div>
	{/snippet}

	{#snippet drawer()}
		<Drawer class="demo-navigation-drawer" open="true" contained>
			<div class="some-list">Drawer</div>
		</Drawer>
	{/snippet}
</ExtraLargeTP>`,
		importAP: `import { ExtraLargeAP } from 'gomdoreelab-lib-grid-web';`,
		exampleAP: `<ExtraLargeAP placementComplement="left" placementAdditional="left">
	{#snippet header()}
		<TopSmallAppBar />
	{/snippet}
	
	{#snippet body()}
		<Body />
	{/snippet}
	
	{#snippet complement()}
		<Complement />
	{/snippet}
	
	{#snippet additional()}
		<Additional />
	{/snippet}		
	
	{#snippet drawer()}
		<Drawer />
	{/snippet}
</ExtraLargeAP>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Extra Large</h1>
			<p>
				화면 크기가 1600px 이상인 디바이스를 사용할 때 적합해요. 창의 개수에 따라 구조가 달라져요.
			</p>

			<Tabs full-width value="Extra-Large" style="margin-top: 3rem;">
				<Tab value="Extra-Large">1개</Tab>
				<Tab value="Extra-Large-Two-Pane">2개</Tab>
				<Tab value="Extra-Large-Add-Pane">3개</Tab>

				{#snippet panelExtraLarge()}
					<TabPanel slot="panel" value="Extra-Large">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={codes.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>header</code>, <code>body</code>, <code>drawer</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet html()}
										<div style="padding: 1rem; min-width: 1600px;">
											<ExtraLarge style="height: 270px;">
												{#snippet header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet body()}
													<div
														style="height: 100%;  width: calc(100% - 0.5rem * 2); padding: 0.5rem;"
													>
														Main
													</div>
												{/snippet}

												{#snippet drawer()}
													<Drawer class="demo-navigation-drawer" open="true" contained>
														<div class="some-list">Drawer</div>
													</Drawer>
												{/snippet}
											</ExtraLarge>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												z-index: 1900;
											}

											.demo-navigation-drawer {
												background-color: rgb(var(--mdui-color-surface-container-low));
												z-index: 1900;
											}

											.some-list {
												background-color: rgb(var(--mdui-color-surface-container-low));
												height: calc(100% - 0.5rem * 2);
												padding: 0.5rem;
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
									href="https://m3.material.io/foundations/layout/applying-layout/large-extra-large"
								>
									Applying layout - Large & Extra-large
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
												<td><code>header</code></td>
												<td>상단 네비게이션 - TopAppBar<sup>*</sup></td>
											</tr>
											<tr>
												<td><code>body</code></td>
												<td>본문</td>
											</tr>
											<tr>
												<td><code>drawer</code></td>
												<td>사이드 네비게이션 - Drawer</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<p class="information">* TopAppBar는 크기(Small, Medium, Large)의 제한이 없어요.</p>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelExtraLargeTwoPane()}
					<TabPanel slot="panel" value="Extra-Large-Two-Pane">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={codes.importTP}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>header</code>, <code>body</code>, <code>complement</code>,
									<code>drawer</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet html()}
										<div style="padding: 1rem; min-width: 1600px;">
											<ExtraLargeTP placement="left" style="height: 270px;">
												{#snippet header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet body()}
													<div
														style="height: 100%; width: calc(100% - 0.5rem * 2); padding: 0.5rem;"
													>
														Main
													</div>
												{/snippet}

												{#snippet complement()}
													<div class="demo-complement">Complement</div>
												{/snippet}

												{#snippet drawer()}
													<Drawer class="demo-navigation-drawer" open="true" contained>
														<div class="some-list">Drawer</div>
													</Drawer>
												{/snippet}
											</ExtraLargeTP>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												z-index: 1900;
											}

											complement {
												width: 100%;
											}

											.demo-complement {
												background-color: rgb(var(--mdui-color-surface-container-high));
												padding: 0.5rem;
												height: calc(100% - 0.5rem * 2);
												width: calc(100% - 0.5rem * 2);
												z-index: 1900;
											}

											.demo-navigation-drawer {
												background-color: rgb(var(--mdui-color-surface-container-low));
												z-index: 1900;
											}

											.some-list {
												background-color: rgb(var(--mdui-color-surface-container-low));
												height: calc(100% - 0.5rem * 2);
												padding: 0.5rem;
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
									href="https://m3.material.io/foundations/layout/applying-layout/large-extra-large"
								>
									Applying layout - Large & Extra-large
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
												<td><code>complement</code> Snippet 위치</td>
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
												<td><code>header</code></td>
												<td>상단 네비게이션 - TopAppBar<sup>*</sup></td>
											</tr>
											<tr>
												<td><code>body</code></td>
												<td>본문</td>
											</tr>
											<tr>
												<td><code>complement</code></td>
												<td>본문 보조</td>
											</tr>
											<tr>
												<td><code>drawer</code></td>
												<td>사이드 네비게이션 - Drawer</td>
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
												<td><code>complement</code></td>
												<td><code>412px</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelExtraLargeAddPane()}
					<TabPanel slot="panel" value="Extra-Large-Add-Pane">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={codes.importAP}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									항상 <code>header</code>, <code>body</code>, <code>complement</code>,
									<code>additional</code>, <code>drawer</code> snippet을 전부 사용해주세요.
								</li>
							</ul>
							<article>
								<Demo height="300px">
									{#snippet html()}
										<div style="padding: 1rem; min-width: 1600px;">
											<ExtraLargeAP
												placementComplement="left"
												placementAdditional="left"
												style="height: 270px;"
											>
												{#snippet header()}
													<AppBarTop class="demo-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet body()}
													<div
														style="height: 100%; width: calc(100% - 0.5rem * 2); padding: 0.5rem;"
													>
														Main
													</div>
												{/snippet}

												{#snippet complement()}
													<div class="demo-complement">Complement</div>
												{/snippet}

												{#snippet additional()}
													<div class="demo-additional">Additional</div>
												{/snippet}

												{#snippet drawer()}
													<Drawer class="demo-navigation-drawer" open="true" contained>
														<div class="some-list">Drawer</div>
													</Drawer>
												{/snippet}
											</ExtraLargeAP>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												z-index: 1900;
											}

											complement {
												width: 100%;
											}

											additional {
												width: 100%;
											}

											.demo-complement {
												background-color: rgb(var(--mdui-color-surface-container-high));
												padding: 0.5rem;
												height: calc(100% - 0.5rem * 2);
												width: calc(100% - 0.5rem * 2);
												z-index: 1900;
											}

											.demo-additional {
												background-color: rgb(var(--mdui-color-surface-container-highest));
												padding: 0.5rem;
												height: calc(100% - 0.5rem * 2);
												width: calc(100% - 0.5rem * 2);
												z-index: 1900;
											}

											.demo-navigation-drawer {
												background-color: rgb(var(--mdui-color-surface-container-low));
												z-index: 1900;
											}

											.some-list {
												background-color: rgb(var(--mdui-color-surface-container-low));
												height: calc(100% - 0.5rem * 2);
												padding: 0.5rem;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={codes.exampleAP}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/foundations/layout/applying-layout/large-extra-large"
								>
									Applying layout - Large & Extra-large
								</a>를 참고해주세요.
							</p>

							<h2>Properties</h2>
							<p>
								항상 <code>_complement</code>를 먼저 배치하기 때문에 같은 방향을 선택하는 경우
								순서를 바꿀 수 없어요.
							</p>
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
												<td>placementComplement</td>
												<td><code>complement</code> Snippet 위치</td>
												<td><code>'left' | 'right'</code></td>
												<td><code>'left'</code></td>
											</tr>
											<tr>
												<td>placementAdditional</td>
												<td><code>additional</code> Snippet 위치</td>
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
												<td><code>header</code></td>
												<td>상단 네비게이션 - TopAppBar<sup>*</sup></td>
											</tr>
											<tr>
												<td><code>body</code></td>
												<td>본문</td>
											</tr>
											<tr>
												<td><code>complement</code></td>
												<td>본문 보조</td>
											</tr>
											<tr>
												<td><code>additional</code></td>
												<td>본문 보조</td>
											</tr>
											<tr>
												<td><code>drawer</code></td>
												<td>사이드 네비게이션 - Drawer</td>
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
												<td><code>complement</code></td>
												<td><code>412px</code></td>
											</tr>
											<tr>
												<td><code>additional</code></td>
												<td><code>400px</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{@render panelExtraLarge()}
				{@render panelExtraLargeTwoPane()}
				{@render panelExtraLargeAddPane()}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/layout/large', title: '레이아웃: Large' }}
			next={{ href: '/components', title: '컴포넌트: 개요' }}
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
