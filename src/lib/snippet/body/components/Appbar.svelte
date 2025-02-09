<script>
	// @ts-nocheck
	import {
		AppBarTop,
		AppBarTopTitle,
		AppBarBottom,
		Rail,
		ButtonIcon,
		Icon
	} from 'gomdoreelab-lib-material-web';
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import { Medium } from 'gomdoreelab-lib-grid-web';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const top = {
		import: `import { AppBarTop, AppBarTopTitle } from 'gomdoreelab-lib-material-web';`,
		example: `<AppBarTop variant="small">
	<ButtonIcon>
		<Icon name="menu"></Icon>
	</ButtonIcon>
	<AppBarTopTitle>곰도리연구소</AppBarTopTitle>
	<ButtonIcon>
		<Icon name="more_vert"></Icon>
	</ButtonIcon>
</AppBarTop>`,
		shrink: `<AppBarTop 
	variant="medium" 
	scroll-behavior="shrink elevate" 
	scroll-target="#scroll-body"
>
	<div id="scroll-body">
		<section>Body</section>
	</div>
</AppBarTop>`,
		orderRailTop: `<AppBarTop order={1}>
...
</AppBarTop>
<Rail>Rail</Rail>`,
		orderHeadTop: `<AppBarTop>
...
</AppBarTop>
<Rail order={1}>Rail</Rail>`
	};

	const bottom = {
		import: `import { AppBarBottom } from 'gomdoreelab-lib-material-web';`,
		example: `<AppBarBottom style="position: relative;">
	<ButtonIcon>
		<Icon name="check_box"></Icon>
	</ButtonIcon>
		<ButtonIcon>
		<Icon name="edit"></Icon>
	</ButtonIcon>
	<ButtonIcon>
		<Icon name="mic_none"></Icon>
	</ButtonIcon>
</AppBarBottom>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>App bars</h1>
			<p>현재 화면에서 중요한 행동(Action)을 수행하는데 쓰여요.</p>

			<Tabs full-width value="Top" style="margin-top: 3rem;">
				<Tab value="Top">Top</Tab>
				<Tab value="Bottom">Bottom</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Top">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={top.import}></Code>
							</article>

							<p>다음 사항을 유의하여 사용하세요:</p>
							<ul>
								<li>
									사용 가능한 <code>variant</code>는 레이아웃에 따라 달라져요.
								</li>
							</ul>
							<article>
								<Demo height="100%">
									{#snippet _html()}
										<div style="position: relative">
											<AppBarTop
												class="demo-top-app-bar"
												variant="small"
												style="position: relative;"
											>
												<ButtonIcon>
													<Icon name="menu"></Icon>
												</ButtonIcon>
												<AppBarTopTitle>곰도리연구소</AppBarTopTitle>
												<ButtonIcon>
													<Icon name="more_vert"></Icon>
												</ButtonIcon>
											</AppBarTop>
										</div>
									{/snippet}
									{#snippet _style()}
										<style>
											mdui-top-app-bar {
												position: relative;
											}

											.demo-top-app-bar {
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={top.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/top-app-bar/overview">
									Metrial - Top app bars
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/top-app-bar">
									MDUI - Top App Bar
								</a>를 참고해주세요.
							</p>

							<h2>예시</h2>
							<h3>Scroll Behavior</h3>
							<p>
								<code>variant</code>를 <code>medium</code> 또는 <code>large</code>로 사용한다면,
								<code>shrink</code>옵션을 사용해 스크롤을 내렸을 때<code>small</code>인 것처럼 보일
								수 있어요. 이 때 <code>scroll-target</code>은 아래 레이아웃 아이디를 기준으로
								설정해야해요.
							</p>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="position: relative">
											<AppBarTop
												class="demo-top-app-bar"
												variant="medium"
												scroll-behavior="shrink elevate"
												scroll-target="#scroll-body"
												style="position: relative;"
											>
												<ButtonIcon>
													<Icon name="menu"></Icon>
												</ButtonIcon>
												<AppBarTopTitle>곰도리연구소</AppBarTopTitle>
												<ButtonIcon>
													<Icon name="more_vert"></Icon>
												</ButtonIcon>
											</AppBarTop>
										</div>
										<div id="scroll-body">
											<section>Body</section>
										</div>
									{/snippet}
									{#snippet _style()}
										<style>
											mdui-top-app-bar {
												position: relative;
											}

											.demo-top-app-bar {
												z-index: 1900;
											}

											#scroll-body {
												height: 200px;
												padding: 1rem;
												overflow-y: scroll;
											}

											#scroll-body > section {
												height: 600px;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={top.shrink}></Code>
							</article>

							<h3>Order</h3>
							<p>
								<code>Medium</code>이상의 Layout에서 <code>Rail</code> 또는 <code>Drawer</code>를
								사용하는 경우 <code>AppBarTop</code>와 사이드 네비게이션 중 어느 항목을 더 우선할지
								결정할 수 있어요.
							</p>
							<p>
								곰도리연구소는 <code>AppBarTop</code>에 <code>order={1}</code>를 부여하고 있어요.
								사이드 네비게이션을 더 우선한다는 뜻이에요.
							</p>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="padding: 1rem;">
											<Medium style="height: 270px;">
												{#snippet _header()}
													<AppBarTop class="demo-order-top-app-bar" order={1}>
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet _body()}
													<div
														style="height: 100%; width: calc(100% - 1.5rem * 2); padding: 1.5rem;"
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
											.demo-order-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												padding-left: 1.5rem;
												z-index: 1900;
											}

											.demo-navigation-rail {
												background-color: rgb(var(--mdui-color-surface-container-low));
												padding-top: 1.25rem;
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={top.orderRailTop}></Code>
							</article>

							<p>
								반대로 <code>Rail</code>에 <code>order={1}</code>을 부여할 수도 있어요.
							</p>
							<article>
								<Demo height="300px">
									{#snippet _html()}
										<div style="padding: 1rem;">
											<Medium style="height: 270px;">
												{#snippet _header()}
													<AppBarTop class="demo-order-top-app-bar">
														<AppBarTopTitle>TopAppBar</AppBarTopTitle>
													</AppBarTop>
												{/snippet}

												{#snippet _body()}
													<div
														style="height: 100%; width: calc(100% - 1.25rem * 2); padding: 1.25rem;"
													>
														Main
													</div>
												{/snippet}

												{#snippet _rail()}
													<Rail class="demo-navigation-rail" order={1}>Rail</Rail>
												{/snippet}
											</Medium>
										</div>
									{/snippet}
									{#snippet _style()}
										<style>
											.demo-order-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												padding-left: 1.5rem;
												z-index: 1900;
											}

											.demo-navigation-rail {
												background-color: rgb(var(--mdui-color-surface-container-low));
												padding-top: 1.25rem;
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={top.orderHeadTop}></Code>
							</article>

							<h2>레이아웃 아이디</h2>
							<p>아이디는 레이아웃을 구성할 때 미리 지정했어요.</p>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>레이아웃 이름</th>
												<th>아이디</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Compact</td>
												<td><code>#compact</code></td>
											</tr>
											<tr>
												<td>Medium</td>
												<td><code>#medium</code></td>
											</tr>
											<tr>
												<td>Expanded</td>
												<td><code>#expanded</code></td>
											</tr>
											<tr>
												<td>Large</td>
												<td><code>#large</code></td>
											</tr>
											<tr>
												<td>Extra Large</td>
												<td><code>#extra-large</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<h2>Properties</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>컴포넌트</th>
												<th>이름</th>
												<th>설명</th>
												<th>타입</th>
												<th>기본값</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="4">AppBarTop</td>
												<td>variant</td>
												<td>모양을 결정해요.</td>
												<td><code>'center-aligned' | 'small' | 'medium' | 'large'</code></td>
												<td><code>'small'</code></td>
											</tr>
											<tr>
												<td>scroll-behavior</td>
												<td
													>스크롤 할 때 행동을 정할 수 있어요. <code>'shrink' 'elevate'</code>처럼
													여러 개의 값을 가질 수 있어요.</td
												>
												<td><code>'hide' | 'shrink' | 'elevate'</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>scroll-target</td>
												<td
													>스크롤 이벤트을 확인할 요소를 정해요. 기본 값은 <code>window</code>에요.
												</td>
												<td><code>string | HTMLElement</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>order</td>
												<td
													>레이아웃 우선 순위를 나타내요. 오름차순(0, 1, 2, ...)으로 정렬해요. 기본
													값은 <code>0</code>이에요.
												</td>
												<td><code>number</code></td>
												<td>-</td>
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
												<th>컴포넌트</th>
												<th>Snippet 이름</th>
												<th>Slot 이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>AppBarTopTitle</td>
												<td><code>_labelLarge</code></td>
												<td><code>label-large</code></td>
												<td>펼쳐진 상태일 때 제목</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Bottom">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={bottom.import}></Code>
							</article>

							<p>다음 사항을 유의하여 사용하세요:</p>
							<ul>
								<li>현재 가능한 행동이 하나 또는 없는 경우는 사용하지 마세요.</li>
								<li>네비게이션 바와 같이 사용하지 마세요.</li>
							</ul>
							<article>
								<Demo height="100%">
									{#snippet _html()}
										<div style="padding: 1rem;">
											<AppBarBottom style="position: relative;">
												<ButtonIcon>
													<Icon name="check_box"></Icon>
												</ButtonIcon>
												<ButtonIcon>
													<Icon name="edit"></Icon>
												</ButtonIcon>
												<ButtonIcon>
													<Icon name="mic_none"></Icon>
												</ButtonIcon>
											</AppBarBottom>
										</div>
									{/snippet}
									{#snippet _style()}
										<style>
											.demo-order-top-app-bar {
												background-color: rgb(var(--mdui-color-surface-container));
												padding-left: 1.5rem;
												z-index: 1900;
											}

											.demo-navigation-rail {
												background-color: rgb(var(--mdui-color-surface-container-low));
												padding-top: 1.25rem;
												z-index: 1900;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={bottom.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/bottom-app-bar/overview">
									Metrial - Bottom app bars
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/bottom-app-bar">
									MDUI - Bottom App Bar
								</a>를 참고해주세요.
							</p>
						</div>
					</TabPanel>
				{/snippet}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/components', title: '컴포넌트: 개요' }}
			next={{ href: '/components/badges', title: '컴포넌트: Badges' }}
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
