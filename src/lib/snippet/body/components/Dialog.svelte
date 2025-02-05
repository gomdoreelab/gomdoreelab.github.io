<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const dialog = {
		import: `import { Dialog } from 'gomdoreelab-lib-material-web';`,
		example: `let isDialogOpen = false;

<Dialog open={isDialogOpen}>
	...
</Dialog>

<Button onclick={() => (isDialogOpen = true)}>
	Open Dialog
</Button>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Dialogs</h1>
			<p>사용자 흐름에서 중요한 프롬프트를 제공해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={dialog.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Code {theme} lang="svelte" text={dialog.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/dialogs/overview">
					Metrial - Dialogs
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/dialog">
					MDUI - Dialog
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
								<td rowspan="5">Dialog</td>
								<td><code>_header</code></td>
								<td
									>상단에 위치하며, <code>_icon</code>과 <code>_headline</code>슬롯을 기본으로 함
								</td>
							</tr>
							<tr>
								<td><code>_icon</code></td>
								<td>상단에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_headline</code></td>
								<td>상단에 들어가는 제목</td>
							</tr>
							<tr>
								<td><code>_description</code></td>
								<td>제목 아래 설명</td>
							</tr>
							<tr>
								<td><code>_action</code></td>
								<td>하단 액션 바에 위치하는 항목(Elements)</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/chips', title: '컴포넌트: Chips' }}
			next={{ href: '/components/divider', title: '컴포넌트: Divider' }}
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
