<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const checkbox = {
		import: `import { Checkbox } from 'gomdoreelab-lib-material-web';`,
		example: `<Checkbox>Checkbox</Checkbox>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Checkbox</h1>
			<p>사용자가 목록에서 하나 이상의 항목을 선택하거나 항목을 켜고 끌 수 있게 해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={checkbox.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Code {theme} lang="svelte" text={checkbox.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a href="https://m3.material.io/components/checkbox/overview"> Metrial - Checkbox </a>와
				<a href="https://www.mdui.org/en/docs/2/components/checkbox"> MDUI - Checkbox </a>를
				참고해주세요.
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
								<td rowspan="3">Checkbox</td>
								<td><code>_uncheckedIcon</code></td>
								<td>선택하지 않은 상태의 아이콘</td>
							</tr>
							<tr>
								<td><code>_checkedIcon</code></td>
								<td>선택한 상태의 아이콘</td>
							</tr>
							<tr>
								<td><code>_indeterminateIcon</code></td>
								<td>중간 상태의 아이콘</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/cards', title: '컴포넌트: Cards' }}
			next={{ href: '/components/chips', title: '컴포넌트: Chips' }}
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
