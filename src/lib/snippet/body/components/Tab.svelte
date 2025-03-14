<script>
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const code = {
		import: `import { Tab, Tabs, TabPanel } from 'gomdoreelab-lib-material-web';`,
		example: `<Tabs value="A">
	<Tab value="A">A</Tab>
	<Tab value="B">B</Tab>

	{#snippet A()}
		<TabPanel slot="panel" value="A">A</TabPanel>
	{/snippet}

	{#snippet B()}
		<TabPanel slot="panel" value="B">B</TabPanel>
	{/snippet}

	{@render A()}
	{@render B()}
</Tabs>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Tabs</h1>
			<p>여러 화면과 뷰에 걸쳐 콘텐츠를 정리할 때 사용해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={code.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Tabs value="A">
								<Tab value="A">A</Tab>
								<Tab value="B">B</Tab>

								{#snippet A()}
									<TabPanel slot="panel" value="A">A</TabPanel>
								{/snippet}

								{#snippet B()}
									<TabPanel slot="panel" value="B">B</TabPanel>
								{/snippet}

								{@render A()}
								{@render B()}
							</Tabs>
						</div>
					{/snippet}

					{#snippet style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}

							mdui-tab-panel {
								padding: 1rem;
							}
						</style>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={code.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/tabs/overview">
					Metrial - Tabs
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/tabs"> MDUI - Tabs </a>를
				참고해주세요.
			</p>

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
								<td rowspan="3">Tabs</td>
								<td>value</td>
								<td><code>Tab</code>을 선택할 수 있어요.</td>
								<td><code>string</code></td>
								<td>-</td>
							</tr>
							<tr>
								<td>variant</td>
								<td>
									<p>탭의 형태를 변경할 수 있어요.</p>
									<ul>
										<li>
											<code>primary</code>: 보통 <code>TopAppBar</code> 아래에 위치해, 전체 페이지를
											변경할 때 사용
										</li>
									</ul>
									<ul>
										<li><code>secondary</code>: 페이지 내 컨텐츠를 변경할 때 사용</li>
									</ul>
								</td>
								<td><code>'primary' | 'secondary'</code></td>
								<td><code>'primary'</code></td>
							</tr>
							<tr>
								<td>placement</td>
								<td>탭이 위치할 곳을 선택할 수 있어요.</td>
								<td
									><code
										>'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' |
										'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'</code
									></td
								>
								<td><code>'top-start'</code></td>
							</tr>
							<tr>
								<td rowspan="2">Tab</td>
								<td>value</td>
								<td><code>Tab</code>의 값이에요.</td>
								<td><code>string</code></td>
								<td>-</td>
							</tr>
							<tr>
								<td>inline</td>
								<td>아이콘과 텍스트를 가로로 배치해요.</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
							</tr>
							<tr>
								<td>TabPanel</td>
								<td>value</td>
								<td><code>TabPanel</code>의 값이에요.</td>
								<td><code>string</code></td>
								<td>-</td>
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
								<td rowspan="1">Tabs</td>
								<td><code>panel</code></td>
								<td>
									<code>TabPanel</code>공간이에요. 여러 개의<code>TabPanel</code>이 올 수 있어요!
								</td>
							</tr>
							<tr>
								<td rowspan="3">Tab</td>
								<td><code>icon</code></td>
								<td>아이콘</td>
							</tr>
							<tr>
								<td><code>badge</code></td>
								<td>배지(아이콘에 알림, 개수 또는 상태 정보를 표시)</td>
							</tr>
							<tr>
								<td><code>custom</code></td>
								<td>사용자 정의 컨텐츠</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/switch', title: '컴포넌트: Switch' }}
			next={{ href: '/components/text-fields', title: '컴포넌트: Text fields' }}
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
</style>
