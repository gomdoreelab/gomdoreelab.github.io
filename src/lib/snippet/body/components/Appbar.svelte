<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
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
		shrink: `<AppBarTop variant="medium" scroll-behavior="shrink elevate" scroll-target={target}>
...
</AppBarTop>`,
		order: `<AppBarTop order={1}>
...
</AppBarTop>`
	};

	const bottom = {
		import: `import { AppBarBottom } from 'gomdoreelab-lib-material-web';`,
		example: `<AppBarBottom>
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
								<Code lang="svelte" text={top.import}></Code>
							</article>

							<p>다음 사항을 유의하여 사용하세요:</p>
							<ul>
								<li>
									사용 가능한 <code>variant</code>는 레이아웃에 따라 달라져요.
								</li>
							</ul>
							<article>
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
								<Code {theme} lang="svelte" text={top.order}></Code>
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

							<h2>Snippets</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>컴포넌트</th>
												<th>이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>AppBarTopTitle</td>
												<td><code>_labelLarge</code></td>
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
								<Code lang="svelte" text={bottom.import}></Code>
							</article>

							<p>다음 사항을 유의하여 사용하세요:</p>
							<ul>
								<li>현재 가능한 행동이 하나 또는 없는 경우는 사용하지 마세요.</li>
								<li>네비게이션 바와 같이 사용하지 마세요.</li>
							</ul>
							<article>
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
