<script>
	// @ts-nocheck
	import { TextField, Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const code = {
		import: `import { TextField } from 'gomdoreelab-lib-material-web';`,
		example: `<TextField label="입력"></TextField>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Text Fields</h1>
			<p>사용자가 UI에 텍스트를 입력할 때 사용해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={code.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<TextField label="입력"></TextField>
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

				<Code {theme} lang="svelte" text={code.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/text-fields/overview">
					Metrial - Text fields
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/text-field">
					MDUI - Text field
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
								<td>TextField</td>
								<td>label</td>
								<td><code>TextField</code>를 설명하는 텍스트</td>
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
								<td rowspan="11">TextField</td>
								<td><code>_icon</code></td>
								<td><code>icon</code></td>
								<td>왼쪽에 사용할 아이콘</td>
							</tr>
							<tr>
								<td><code>_endIcon</code></td>
								<td><code>end-icon</code></td>
								<td>오른쪽에 사용할 아이콘</td>
							</tr>
							<tr>
								<td><code>_errorIcon</code></td>
								<td><code>error-icon</code></td>
								<td>검증(Validation) 실패할 때 오른쪽에 나타낼 아이콘</td>
							</tr>
							<tr>
								<td><code>_prefix</code></td>
								<td><code>prefix</code></td>
								<td>처음에 더하는 텍스트</td>
							</tr>
							<tr>
								<td><code>_suffix</code></td>
								<td><code>suffix</code></td>
								<td>마지막에 더하는 텍스트</td>
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
								<td><code>_togglePasswordButton</code></td>
								<td><code>toggle-password-button</code></td>
								<td>패스워드 보이기 전환 버튼</td>
							</tr>
							<tr>
								<td><code>_showPasswordIcon</code></td>
								<td><code>show-password-icon</code></td>
								<td>패스워드 보여주고 있을 때 나타낼 아이콘</td>
							</tr>
							<tr>
								<td><code>_hidePasswordIcon</code></td>
								<td><code>hide-password-icon</code></td>
								<td>패스워드 감추고 있을 때 나타낼 아이콘</td>
							</tr>
							<tr>
								<td><code>_helper</code></td>
								<td><code>helper</code></td>
								<td>하단에 배치할 유용한 텍스트</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/tabs', title: '컴포넌트: Tabs' }}
			next={{ href: '/components/tooltips', title: '컴포넌트: Tooltips' }}
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
