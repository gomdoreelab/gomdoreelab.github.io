<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const chip = {
		import: `import { Chip } from 'gomdoreelab-lib-material-web';`,
		example: `<Chip>Chip</Chip>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Chips</h1>
			<p>
				사람들이 정보를 입력하고, 선택을 하며, 콘텐츠를 필터링하거나 동작을 실행하는 데 도움을 줘요.
			</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={chip.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Code {theme} lang="svelte" text={chip.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a href="https://m3.material.io/components/chips/overview"> Metrial - Chips </a>와
				<a href="https://www.mdui.org/en/docs/2/components/chip"> MDUI - Chip </a>을 참고해주세요.
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
								<td rowspan="4">Chip</td>
								<td><code>_icon</code></td>
								<td>왼쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_endIcon</code></td>
								<td>오른쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_selectedIcon</code></td>
								<td>선택했을 때 왼쪽 아이콘</td>
							</tr>
							<tr>
								<td><code>_deleteIcon</code></td>
								<td>삭제가 가능할 때 아이콘</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/checkbox', title: '컴포넌트: Checkbox' }}
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
