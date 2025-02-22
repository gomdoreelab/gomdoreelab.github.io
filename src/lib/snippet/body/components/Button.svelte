<script>
	import {
		Button,
		ButtonIcon,
		Fab,
		Icon,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab,
		SegmentedButton,
		SegmentedButtonGroup
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const common = {
		import: `import { Button } from 'gomdoreelab-lib-material-web';`,
		example: `<Button>
	Button
</Button>`,
		event: `<Button onclick={() => alert('클릭했어요!')}>
	Button
</Button>`,
		variant: `<Button variant="filled">
	Filled
</Button>
<Button variant="tonal">
	Tonal
</Button>
<Button variant="outlined">
	Outlined
</Button>
<Button variant="text">
	Text
</Button>
`
	};

	const fab = {
		import: `import { Fab } from 'gomdoreelab-lib-material-web';`,
		example: `<Fab>
	{#snippet icon()}
		<Icon slot="icon" name="edit" />
	{/snippet}

	{@render icon()}
</Fab>`
	};

	const icon = {
		import: `import { ButtonIcon } from 'gomdoreelab-lib-material-web';`,
		example: `<ButtonIcon>
	<Icon name="edit" />
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

				{#snippet panelCommon()}
					<TabPanel slot="panel" value="Common">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={common.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<Button>Button</Button>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={common.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/buttons/overview">
									Metrial - Buttons
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/button">
									MDUI - Button
								</a>을 참고해주세요.
							</p>

							<h2>예시</h2>
							<h3>Event</h3>
							<p>
								<code>onclick</code>이벤트를 사용할 수 있어요.
							</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<Button onclick={() => alert('클릭했어요!')}>Button</Button>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={common.event}></Code>
							</article>

							<h3>Variant</h3>
							<p>여러가지 형태의 버튼 모양을 제공하고 있어요.</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<Button variant="filled">Filled</Button>
											<Button variant="tonal">Tonal</Button>
											<Button variant="outlined">Outlined</Button>
											<Button variant="text">Text</Button>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
												gap: 0.5rem;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={common.variant}></Code>
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
												<td>Button</td>
												<td>variant</td>
												<td>
													<p>버튼 스타일</p>
													<ul class="ul-table">
														<li>elevated: 그림자 효과로 눈에 띄게 만든 버튼이에요.</li>
														<li>filled: '저장'이나 '확인' 같은 최종 동작에 쓰는 버튼이에요.</li>
														<li>
															tonal: filled와 outlined의 중간 느낌이에요. 중요도가 중간에서 높은
															동작에 적합해요.
														</li>
														<li>
															outlined: 테두리만 있는 버튼이에요. 중요도가 중간이거나 부차적인
															동작에 쓰기 좋아요.
														</li>
														<li>text: 글자로만 된 버튼이에요. 중요도가 낮은 동작에 사용해요.</li>
													</ul>
												</td>
												<td><code>'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'</code></td>
												<td><code>'filled'</code></td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<h2>Slots</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>컴포넌트</th>
												<th>Slot 이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="2">Button</td>
												<td><code>icon</code></td>
												<td>왼쪽에 들어가는 아이콘</td>
											</tr>
											<tr>
												<td><code>end-icon</code></td>
												<td>오른쪽에 들어가는 아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelFab()}
					<TabPanel slot="panel" value="Fab">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={fab.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<Fab>
												{#snippet icon()}
													<Icon slot="icon" name="edit" />
												{/snippet}

												{@render icon()}
											</Fab>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
												gap: 0.5rem;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={fab.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/components/floating-action-button/overview"
								>
									Metrial - Floating Action buttons
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/fab">
									MDUI - Fab
								</a>를 참고해주세요.
							</p>

							<h2>Slots</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>컴포넌트</th>
												<th>Slot 이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Fab</td>
												<td><code>icon</code></td>
												<td>아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelIcon()}
					<TabPanel slot="panel" value="Icon">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={icon.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<ButtonIcon>
												<Icon name="edit" />
											</ButtonIcon>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
												gap: 0.5rem;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={icon.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/icon-buttons/overview">
									Metrial - Icon buttons
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/button-icon">
									MDUI - ButtonIcon
								</a>을 참고해주세요.
							</p>

							<h2>Slots</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>컴포넌트</th>
												<th>Slot 이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Icon</td>
												<td><code>selected-icon</code></td>
												<td>선택받은 상태에서 사용할 아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelSegmented()}
					<TabPanel slot="panel" value="Segmented">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={segmented.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<SegmentedButtonGroup>
												<SegmentedButton>1</SegmentedButton>
												<SegmentedButton>2</SegmentedButton>
												<SegmentedButton>3</SegmentedButton>
											</SegmentedButtonGroup>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: clearInterval;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={segmented.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/components/segmented-buttons/overview"
								>
									Metrial - Segmented buttons
								</a>와
								<a
									target="_blank"
									href="https://www.mdui.org/en/docs/2/components/segmented-button"
								>
									MDUI - SegmentedButton
								</a>을 참고해주세요.
							</p>

							<h2>Slots</h2>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>컴포넌트</th>

												<th>Slot 이름</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="3">SegmentedButton</td>
												<td><code>icon</code></td>
												<td>왼쪽에 배치할 아이콘</td>
											</tr>
											<tr>
												<td><code>selected-icon</code></td>
												<td>선택받은 상태에서 사용할 아이콘</td>
											</tr>
											<tr>
												<td><code>end-icon</code></td>
												<td>오른쪽에 배치할 아이콘</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{@render panelCommon()}
				{@render panelFab()}
				{@render panelIcon()}
				{@render panelSegmented()}
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

	.ul-table {
		padding-left: 0.5rem;
	}
</style>
