<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const code = {
		import: `import { Tooltip } from 'gomdoreelab-lib-material-web';`,
		example: `<Tooltip content="대비">
	<ButtonIcon>
		<Icon name="contrast"></Icon>
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
				<Code lang="svelte" text={code.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
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
								<td rowspan="3">Tooltip</td>
								<td><code>_headline</code></td>
								<td><code>headline</code></td>
								<td><code>variant="rich"</code>일 때만 사용가능하며, 제목을 나타냄</td>
							</tr>
							<tr>
								<td><code>_content</code></td>
								<td><code>content</code></td>
								<td>내용을 나타냄</td>
							</tr>
							<tr>
								<td><code>_action</code></td>
								<td><code>action</code></td>
								<td><code>variant="rich"</code>일 때만 사용가능하며, 하단에 버튼으로 활용</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/text-fields', title: '컴포넌트: Text fields' }}
			next={{ href: '/material', title: '디자인: 개요' }}
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
