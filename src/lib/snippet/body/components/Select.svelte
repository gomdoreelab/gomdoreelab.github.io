<script>
	// @ts-nocheck
	import {
		Select,
		MenuItem,
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

	const select = {
		import: `import { Select, MenuItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Select value="Apple">
	<MenuItem value="Apple">사과</MenuItem>
	<MenuItem value="Banana">바나나</MenuItem>
</Select>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Select</h1>
			<p>드롭다운 메뉴에 옵션 목록을 표시하는데 쓰여요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={select.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<Select value="Apple">
								<MenuItem value="Apple">사과</MenuItem>
								<MenuItem value="Banana">바나나</MenuItem>
							</Select>
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

				<Code {theme} lang="svelte" text={select.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/select">
					MDUI - Select
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
								<td>Select</td>
								<td>value</td>
								<td>선택한 버튼의 값이에요.</td>
								<td><code>string | string[]</code></td>
								<td><code>''</code></td>
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
								<td rowspan="8">Select</td>
								<td><code>_icon</code></td>
								<td><code>icon</code></td>
								<td>왼쪽 아이콘</td>
							</tr>
							<tr>
								<td><code>_endIcon</code></td>
								<td><code>end-icon</code></td>
								<td>오른쪽 아이콘</td>
							</tr>
							<tr>
								<td><code>_errorIcon</code></td>
								<td><code>error-icon</code></td>
								<td>실패했을 때 아이콘</td>
							</tr>
							<tr>
								<td><code>_prefix</code></td>
								<td><code>prefix</code></td>
								<td>왼쪽 텍스트</td>
							</tr>
							<tr>
								<td><code>_suffix</code></td>
								<td><code>suffix</code></td>
								<td>오른쪽 텍스트</td>
							</tr>
							<tr>
								<td><code>_clearButton</code></td>
								<td><code>clear-button</code></td>
								<td>초기화 버튼</td>
							</tr>
							<tr>
								<td><code>_clearIcon</code></td>
								<td><code>clear-icon</code></td>
								<td>초기화 버튼 아이콘</td>
							</tr>
							<tr>
								<td><code>_helper</code></td>
								<td><code>helper</code></td>
								<td>하단 추가 텍스트</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/radio-button', title: '컴포넌트: Radio button' }}
			next={{ href: '/components/sliders', title: '컴포넌트: Sliders' }}
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
