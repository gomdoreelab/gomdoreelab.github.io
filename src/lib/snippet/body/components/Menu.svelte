<script>
	import { Menu, MenuItem, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
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
	value="1"
	onclick={(event) => console.log(event)}
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
				<Code {theme} lang="svelte" text={menu.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Menu>
								<MenuItem>아이템1</MenuItem>
								<MenuItem>아이템2</MenuItem>
							</Menu>
						</div>
					{/snippet}
				</Demo>

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
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Menu
								selects="single"
								value="1"
								onclick={(/** @type {any} */ event) => console.log(event)}
							>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
							</Menu>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={menu.value}></Code>
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
								<td rowspan="2">Menu</td>
								<td>selects</td>
								<td>
									아이템을 선택가능한 상태로 바꿀 수 있어요. 기본 값은 아이템을 선택할 수 없는
									상태에요.
								</td>
								<td><code>'single' | 'multiple'</code></td>
								<td>-</td>
							</tr>
							<tr>
								<td>value</td>
								<td>선택한 아이템의 값을 나타내요.</td>
								<td><code>string | string[]</code></td>
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
								<td rowspan="6">MenuItem</td>
								<td><code>icon</code></td>
								<td>왼쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>end-icon</code></td>
								<td>오른쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>end-text</code></td>
								<td>오른쪽에 들어가는 텍스트</td>
							</tr>
							<tr>
								<td><code>selected-icon</code></td>
								<td>선택했을 때 나타낼 아이콘</td>
							</tr>
							<tr>
								<td><code>submenu</code></td>
								<td>하위 메뉴</td>
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
