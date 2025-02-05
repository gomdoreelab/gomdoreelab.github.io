<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const menu = {
		import: `import { Menu, MenuItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Menu>
	<MenuItem>아이템1</MenuItem>
	<MenuItem>아이템2</MenuItem>
</Menu>`,
		value: `<Menu
	selects="single"
	{value}
	onclick={(event) => {}}
>
	<MenuItem value={1}>1</MenuItem>
	<MenuItem value={2}>2</MenuItem>
	<MenuItem value={3}>3</MenuItem>
</Menu>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Menus</h1>
			<p>일시적으로 나타나는 화면에 선택할 수 있는 항목을 표현하는데 사용해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={menu.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Code {theme} lang="svelte" text={menu.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/menus/overview">
					Metrial - Menus
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/menu"> MDUI - Menu </a>를
				참고해주세요.
			</p>

			<h2>예시</h2>
			<h3>값</h3>
			<p>
				메뉴 중 한가지를 선택할 수 있고, 선택한 아이템은 값을 가질 수 있어요. 이것으로 선택한 상태를
				나타낼 수도 있어요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={menu.value}></Code>
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
								<td rowspan="6">MenuItem</td>
								<td><code>_icon</code></td>
								<td>왼쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_endIcon</code></td>
								<td>오른쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_endText</code></td>
								<td>오른쪽에 들어가는 텍스트</td>
							</tr>
							<tr>
								<td><code>_selectedIcon</code></td>
								<td>선택했을 때 나타낼 아이콘</td>
							</tr>
							<tr>
								<td><code>_submenu</code></td>
								<td>하위 메뉴</td>
							</tr>
							<tr>
								<td><code>_custom</code></td>
								<td>사용자 정의 컨텐츠</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/lists', title: '컴포넌트: Lists' }}
			next={{ href: '/components/navigation', title: '컴포넌트: Navigation' }}
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
