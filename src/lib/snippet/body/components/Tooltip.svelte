<script>
	import { Tooltip, ButtonIcon, Icon, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const code = {
		import: `import { Tooltip } from 'gomdoreelab-lib-material-web';`,
		example: `<Tooltip content="대비">
	<ButtonIcon>
		<Icon name="contrast" />
	</ButtonIcon>
</Tooltip>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Tooltip</h1>
			<p>간단한 라벨이나 메시지를 표시할 때 사용해요.</p>

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
							<Tooltip content="대비">
								<ButtonIcon>
									<Icon name="contrast" />
								</ButtonIcon>
							</Tooltip>
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

				<Code {theme} lang="svelte" text={code.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/tooltips/overview">
					Metrial - Tooltips
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/tooltip">
					MDUI - Tooltip
				</a>을 참고해주세요.
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
								<td rowspan="2">Tooltip</td>
								<td>content</td>
								<td><code>Tooltip</code>의 내용이에요.</td>
								<td><code>string</code></td>
								<td>-</td>
							</tr>
							<tr>
								<td>variant</td>
								<td>
									<p>제공할 디자인 형태에요.</p>
									<ul>
										<li><code>plain</code>: 한 줄로 간단하게 표현할 때 사용해요.</li>
										<li><code>rich</code>: 제목, 본문, 버튼을 포함해요.</li>
									</ul>
								</td>
								<td><code>'plain' | 'rich'</code></td>
								<td><code>'plain'</code></td>
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
								<td rowspan="3">Tooltip</td>
								<td><code>headline</code></td>
								<td><code>variant="rich"</code>일 때만 사용가능하고, 제목을 나타내요.</td>
							</tr>
							<tr>
								<td><code>content</code></td>
								<td>내용을 나타내요.</td>
							</tr>
							<tr>
								<td><code>action</code></td>
								<td><code>variant="rich"</code>일 때만 사용가능하고, 하단 버튼으로 활용해요.</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/text-fields', title: '컴포넌트: Text fields' }}
			next={{ href: '/functions', title: '함수: 개요' }}
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
