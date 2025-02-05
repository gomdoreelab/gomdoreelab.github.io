<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const radio = {
		import: `import { Radio, RadioGroup } from 'gomdoreelab-lib-material-web';`,
		example: `<RadioGroup value="A">
	<Radio value="A">A</Radio>
	<Radio value="B">B</Radio>
</RadioGroup>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Radio button</h1>
			<p>여러 옵션 중 하나를 선택할 수 있게 도와줘요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code lang="svelte" text={radio.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Code {theme} lang="svelte" text={radio.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/radio-button/overview">
					Metrial - Radio button
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/radio">
					MDUI - Radio
				</a>를 참고해주세요.
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
								<td rowspan="2">Radio</td>
								<td><code>_uncheckedIcon</code></td>
								<td><code>unchecked-icon</code></td>
								<td>선택하지 않은 상태에서 보여줄 아이콘</td>
							</tr>
							<tr>
								<td><code>_checkedIcon</code></td>
								<td><code>checked-icon</code></td>
								<td>선택한 상태에서 보여줄 아이콘</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/progress-indicators', title: '컴포넌트: Progress indicators' }}
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
