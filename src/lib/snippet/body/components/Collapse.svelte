<script>
	// @ts-nocheck
	import {
		Collapse,
		CollapseItem,
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

	const collapse = {
		import: `import { Collapse, CollapseItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Collapse>
	<CollapseItem header="첫번째 제목">
		{#snippet _header()}
			첫번째 항목
		{/snippet}
	</CollapseItem>

	<CollapseItem header="두번째 제목">
		{#snippet _header()}
			두번쨰 항목
		{/snippet}
	</CollapseItem>
</Collapse>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Collapse</h1>
			<p>복잡한 내용 영역을 그룹화하고 숨기는 데 사용되어 페이지 구성을 개선하는 데 도움을 줘요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={collapse.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<Collapse>
								<CollapseItem header="첫번째 제목">
									{#snippet _header()}
										첫번째 항목
									{/snippet}
								</CollapseItem>

								<CollapseItem header="두번째 제목">
									{#snippet _header()}
										두번쨰 항목
									{/snippet}
								</CollapseItem>
							</Collapse>
						</div>
					{/snippet}

					{#snippet _style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}
						</style>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={collapse.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/collapse">
					MDUI - Collapse
				</a>를 참고해주세요.
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
								<td>CollapseItem</td>
								<td>header</td>
								<td>접을 수 있는 패널 아이템의 제목</td>
								<td><code>string</code></td>
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
								<td>CollapseItem</td>
								<td><code>_header</code></td>
								<td><code>header</code></td>
								<td>해당 제목에 들어갈 내용</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/chips', title: '컴포넌트: Chips' }}
			next={{ href: '/components/dialogs', title: '컴포넌트: Dialogs' }}
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
