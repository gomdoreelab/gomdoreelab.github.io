<script>
	// @ts-nocheck
	import {
		Bar,
		BarItem,
		ButtonIcon,
		Drawer,
		Rail,
		RailItem,
		List,
		ListItem,
		Button,
		Icon,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	let isOpenDrawer = $state(false);
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
		example: `<Drawer open="true" contained>
	<List>
		<ListItem>
			홈
			{#snippet _icon()}
				<Icon slot="icon" name="home"></Icon>
			{/snippet}
		</ListItem>
		...
	</List>
</Drawer>`,
		open: `let isOpenDrawer = $state(false);

<Drawer open={isOpenDrawer} contained>
	<List>
		<ListItem>
			홈
			{#snippet _icon()}
				<Icon slot="icon" name="home"></Icon>
			{/snippet}
		</ListItem>
		<ListItem>
			레이아웃
			{#snippet _icon()}
				<Icon slot="icon" name="view_sidebar"></Icon>
			{/snippet}
		</ListItem>
	</List>
</Drawer>

<Button onclick={() => (isOpenDrawer = true)>Open Drawer</Button>`
	};

	const rail = {
		import: `import { Rail, RailItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Rail contained>
	<RailItem>
		홈
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</RailItem>
	<RailItem>
		레이아웃
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</RailItem>
</Rail>`,
		top: `<Rail contained>
	{#snippet _top()}
		<ButtonIcon slot="top" onclick={() => {}}>
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
								<Code {theme} lang="svelte" text={bar.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet _html()}
										<div class="demo-block" style="padding: 1rem;">
											<Bar class="demo-bar">
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
											</Bar>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-block {
												position: relative;
												width: calc(100% - 1rem * 2);
											}

											.demo-bar {
												position: relative;
												width: 100% !important;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={bar.example}></Code>
							</article>

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
												<th>Snippet 이름</th>
												<th>Slot 이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="3">BarItem</td>
												<td><code>_icon</code></td>
												<td><code>icon</code></td>
												<td>아이콘</td>
											</tr>
											<tr>
												<td><code>_activeIcon</code></td>
												<td><code>active-icon</code></td>
												<td>선택했을 때 나타낼 아이콘</td>
											</tr>
											<tr>
												<td><code>_badge</code></td>
												<td><code>badge</code></td>
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
								<Code {theme} lang="svelte" text={drawer.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>
									일반적으로 <code>List</code>와 같이 사용해요. 기본적으로 <code>Drawer</code>는
									<code>Card</code>처럼 비어있어요.
								</li>
							</ul>
							<article>
								<Demo height="130px">
									{#snippet _html()}
										<div class="demo-block-drawer" style="padding: 1rem;">
											<Drawer open="true" contained>
												<List>
													<ListItem>
														홈
														{#snippet _icon()}
															<Icon slot="icon" name="home"></Icon>
														{/snippet}
													</ListItem>
													<ListItem>
														레이아웃
														{#snippet _icon()}
															<Icon slot="icon" name="view_sidebar"></Icon>
														{/snippet}
													</ListItem>
												</List>
											</Drawer>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-block-drawer {
												height: 100%;
												min-width: 700px;
												position: relative;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={drawer.example}></Code>
							</article>

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

							<h2>예시</h2>
							<h3>Open</h3>
							<p>일반적으로 버튼을 통해 <code>Drawer</code>를 열고 닫아요.</p>

							<article>
								<Demo height="130px">
									{#snippet _html()}
										<div class="demo-block-drawer" style="padding: 1rem;">
											<Drawer open={isOpenDrawer} contained>
												<List>
													<ListItem>
														홈
														{#snippet _icon()}
															<Icon slot="icon" name="home"></Icon>
														{/snippet}
													</ListItem>
													<ListItem>
														레이아웃
														{#snippet _icon()}
															<Icon slot="icon" name="view_sidebar"></Icon>
														{/snippet}
													</ListItem>
												</List>
											</Drawer>

											<Button onclick={() => (isOpenDrawer = true)}>Open Drawer</Button>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-block-drawer {
												height: 100%;
												min-width: 700px;
												position: relative;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={drawer.open}></Code>
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
												<td rowspan="3">Drawer</td>
												<td>open</td>
												<td><code>Drawer</code>를 열어요.</td>
												<td><code>boolean</code></td>
												<td><code>false</code></td>
											</tr>
											<tr>
												<td>modal</td>
												<td><code>Drawer</code>를 열 때 오버레이를 나타내요.</td>
												<td><code>boolean</code></td>
												<td><code>false</code></td>
											</tr>
											<tr>
												<td>contained</td>
												<td>
													<p>
														<code>Drawer</code>를 <code>body</code>가 아닌 다른 요소에 포함할 때
														사용해요.
													</p>
													<p>
														이 특성을 사용하는 경우 부모 요소에
														<code>position: relative; overflow: hidden;</code>를 추가해야해요.
													</p>
												</td>
												<td><code>boolean</code></td>
												<td><code>false</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Rail">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={rail.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="140px">
									{#snippet _html()}
										<div class="demo-block-rail" style="padding: 1rem;">
											<Rail contained>
												<RailItem>
													홈
													{#snippet _icon()}
														<Icon slot="icon" name="home"></Icon>
													{/snippet}
												</RailItem>
												<RailItem>
													레이아웃
													{#snippet _icon()}
														<Icon slot="icon" name="view_sidebar"></Icon>
													{/snippet}
												</RailItem>
											</Rail>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-block-rail {
												height: 100%;
												min-width: 700px;
												position: relative;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={rail.example}></Code>
							</article>

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
								<Demo height="300px">
									{#snippet _html()}
										<div class="demo-block-rail" style="padding: 1rem;">
											<Rail contained>
												{#snippet _top()}
													<ButtonIcon slot="top" onclick={() => {}}>
														<Icon name="menu"></Icon>
													</ButtonIcon>
												{/snippet}

												<RailItem>
													홈
													{#snippet _icon()}
														<Icon slot="icon" name="home"></Icon>
													{/snippet}
												</RailItem>
												<RailItem>
													레이아웃
													{#snippet _icon()}
														<Icon slot="icon" name="view_sidebar"></Icon>
													{/snippet}
												</RailItem>
											</Rail>
										</div>
									{/snippet}

									{#snippet _style()}
										<style>
											.demo-block-rail {
												height: 100%;
												min-width: 700px;
												position: relative;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={rail.top}></Code>
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
												<td>Rail</td>
												<td>contained</td>
												<td>
													<p>
														<code>Rail</code>을 <code>body</code>가 아닌 다른 요소에 포함할 때
														사용해요.
													</p>
													<p>
														이 특성을 사용하는 경우 부모 요소에
														<code>position: relative; overflow: hidden;</code>를 추가해야해요.
													</p>
												</td>
												<td><code>boolean</code></td>
												<td><code>false</code></td>
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
												<td rowspan="2">Rail</td>
												<td><code>_top</code></td>
												<td><code>top</code></td>
												<td>상단에 고정할 아이콘</td>
											</tr>
											<tr>
												<td><code>_bottom</code></td>
												<td><code>bottom</code></td>
												<td>하단에 고정할 아이콘</td>
											</tr>
											<tr>
												<td rowspan="3">RailItem</td>
												<td><code>_icon</code></td>
												<td><code>icon</code></td>
												<td>아이콘</td>
											</tr>
											<tr>
												<td><code>_activeIcon</code></td>
												<td><code>active-icon</code></td>
												<td>선택했을 때 나타낼 아이콘</td>
											</tr>
											<tr>
												<td><code>_badge</code></td>
												<td><code>badge</code></td>
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
