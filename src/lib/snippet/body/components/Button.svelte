<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const common = {
		import: `import { Button } from 'gomdoreelab-lib-material-web';`,
		example: `<Button>Button</Button>`,
		event: `<Button onclick={()=>{}}>Button</Button>`
	};

	const fab = {
		import: `import { Fab } from 'gomdoreelab-lib-material-web';`,
		example: `<Fab>
	{#snippet _icon()}
		<Icon slot="icon" name="edit"></Icon>
	{/snippet}
</Fab>`
	};

	const icon = {
		import: `import { ButtonIcon } from 'gomdoreelab-lib-material-web';`,
		example: `<ButtonIcon>
	<Icon name="edit"></Icon>
</ButtonIcon>`
	};

	const segmented = {
		import: `import { SegmentedButton, SegmentedButtonGroup } from 'gomdoreelab-lib-material-web';`,
		example: `<SegmentedButtonGroup>
	<SegmentedButton>1</SegmentedButton>
	<SegmentedButton>2</SegmentedButton>
	<SegmentedButton>3</SegmentedButton>
</SegmentedButtonGroup>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Buttons</h1>
			<p>한 번의 탭(Tap)으로 행동을 취하고 선택을 할 수 있게 해줘요.</p>

			<Tabs full-width value="Common" style="margin-top: 3rem;">
				<Tab value="Common">Common</Tab>
				<Tab value="Fab">Fab</Tab>
				<Tab value="Icon">Icon</Tab>
				<Tab value="Segmented">Segmented</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Common">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={common.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={common.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a href="https://m3.material.io/components/buttons/overview">
									Metrial - Buttons
								</a>와
								<a href="https://www.mdui.org/en/docs/2/components/button"> MDUI - Button </a>을
								참고해주세요.
							</p>

							<h2>예시</h2>
							<h3>Event</h3>
							<p>
								<code>onclick</code>이벤트를 사용할 수 있어요.
							</p>
							<article>
								<Code {theme} lang="svelte" text={common.event}></Code>
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
												<td rowspan="2">Button</td>
												<td><code>_icon</code></td>
												<td>왼쪽에 들어가는 아이콘</td>
											</tr>
											<tr>
												<td><code>_endIcon</code></td>
												<td>오른쪽에 들어가는 아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Fab">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={fab.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={fab.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a href="https://m3.material.io/components/floating-action-button/overview">
									Metrial - Floating Action buttons
								</a>와
								<a href="https://www.mdui.org/en/docs/2/components/fab"> MDUI - Fab </a>를
								참고해주세요.
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
												<td>Fab</td>
												<td><code>_icon</code></td>
												<td>아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Icon">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={icon.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={icon.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a href="https://m3.material.io/components/icon-buttons/overview">
									Metrial - Icon buttons
								</a>와
								<a href="https://www.mdui.org/en/docs/2/components/button-icon">
									MDUI - ButtonIcon
								</a>을 참고해주세요.
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
												<td>Icon</td>
												<td><code>_selectedIcon</code></td>
												<td>선택받은 상태에서 사용할 아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Segmented">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={segmented.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={segmented.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a href="https://m3.material.io/components/segmented-buttons/overview">
									Metrial - Segmented buttons
								</a>와
								<a href="https://www.mdui.org/en/docs/2/components/segmented-button">
									MDUI - SegmentedButton
								</a>을 참고해주세요.
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
												<td rowspan="3">SegmentedButton</td>
												<td><code>_icon</code></td>
												<td>왼쪽에 배치할 아이콘</td>
											</tr>
											<tr>
												<td><code>_selectedIcon</code></td>
												<td>선택받은 상태에서 사용할 아이콘</td>
											</tr>
											<tr>
												<td><code>_endIcon</code></td>
												<td>오른쪽에 배치할 아이콘</td>
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
			previous={{ href: '/components/badges', title: '컴포넌트: Badges' }}
			next={{ href: '/components/cards', title: '컴포넌트: Cards' }}
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
