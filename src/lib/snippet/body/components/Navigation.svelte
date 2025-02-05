<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const bar = {
		import: `import { Bar, BarItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Bar>
	<BarItem>
		레이아웃
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</BarItem>
	
	<BarItem>
		코드
		{#snippet _icon()}
			<Icon slot="icon" name="code"></Icon>
		{/snippet}
	</BarItem>
</Bar>`
	};

	const drawer = {
		import: `import { Drawer } from 'gomdoreelab-lib-material-web';`,
		example: `<Drawer>
	<List>
		<ListItem>
			홈
			{#snippet _icon()}
				<Icon slot="icon" name="home"></Icon>
			{/snippet}
		</ListItem>
		...
	</List>
</Drawer>`
	};

	const rail = {
		import: `import { Rail, RailItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Rail>
	<RailItem>
		홈
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</RailItem>
	...
</Rail>`,
		top: `<Rail>
	{#snippet _top()}
		<ButtonIcon slot="top" onclick={() => (isDrawerOpen = true)}>
			<Icon name="menu"></Icon>
		</ButtonIcon>
	{/snippet}
	...
</Rail>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Navigation</h1>
			<p>
				작은 화면을 가진 기기부터 큰 화면을 가진 기기를 포함해 모든 기기에 맞는 UI를 통해 사용자가
				다른 화면으로 이동할 수 있게 해요.
			</p>

			<Tabs full-width value="Bar" style="margin-top: 3rem;">
				<Tab value="Bar">Bar</Tab>
				<Tab value="Drawer">Drawer</Tab>
				<Tab value="Rail">Rail</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Bar">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={bar.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={bar.example}></Code>
							</article>

							<p class="information">* 모바일 화면으로 전환하면 사용한 모습을 볼 수 있어요!</p>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/navigation-bar/overview">
									Metrial - Navigation bar
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/navigation-bar">
									MDUI - Navigation bar
								</a>를 참고해주세요.
							</p>

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
												<td rowspan="3">BarItem</td>
												<td><code>_icon</code></td>
												<td>아이콘</td>
											</tr>
											<tr>
												<td><code>_activeIcon</code></td>
												<td>선택했을 때 나타낼 아이콘</td>
											</tr>
											<tr>
												<td><code>_badge</code></td>
												<td>배지(아이콘에 알림, 개수 또는 상태 정보를 표시)</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Drawer">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={drawer.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									일반적으로 <code>List</code>와 같이 사용해요. 기본적으로 <code>Drawer</code>는
									<code>Card</code>처럼 비어있어요.
								</li>
							</ul>
							<article>
								<Code {theme} lang="svelte" text={drawer.example}></Code>
							</article>

							<p class="information">* 데스크톱 화면으로 전환하면 사용한 모습을 볼 수 있어요!</p>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/components/navigation-drawer/overview"
								>
									Metrial - Navigation drawer
								</a>와
								<a
									target="_blank"
									href="https://www.mdui.org/en/docs/2/components/navigation-drawer"
								>
									MDUI - Navigation drawer
								</a>를 참고해주세요.
							</p>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Rail">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={rail.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={rail.example}></Code>
							</article>

							<p class="information">* 태블릿 화면으로 전환하면 사용한 모습을 볼 수 있어요!</p>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/components/navigation-rail/overview"
								>
									Metrial - Navigation rail
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/navigation-rail">
									MDUI - Navigation rail
								</a>을 참고해주세요.
							</p>

							<h2>예시</h2>
							<h3>Top</h3>
							<p>상단에 항목을 고정할 수도 있어요.</p>
							<article>
								<Code {theme} lang="svelte" text={rail.top}></Code>
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
												<td rowspan="2">Rail</td>
												<td><code>_top</code></td>
												<td>상단에 고정할 아이콘</td>
											</tr>
											<tr>
												<td><code>_bottom</code></td>
												<td>하단에 고정할 아이콘</td>
											</tr>
											<tr>
												<td rowspan="3">RailItem</td>
												<td><code>_icon</code></td>
												<td>아이콘</td>
											</tr>
											<tr>
												<td><code>_activeIcon</code></td>
												<td>선택했을 때 나타낼 아이콘</td>
											</tr>
											<tr>
												<td><code>_badge</code></td>
												<td>배지(아이콘에 알림, 개수 또는 상태 정보를 표시)</td>
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
			previous={{ href: '/components/menus', title: '컴포넌트: Menus' }}
			next={{ href: '/components/progress-indicators', title: '컴포넌트: Progress indicators' }}
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
