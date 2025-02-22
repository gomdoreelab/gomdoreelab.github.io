<script>
	import { Radio, RadioGroup, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const radio = {
		import: `import { Radio, RadioGroup } from 'gomdoreelab-lib-material-web';`,
		example: `<RadioGroup class="demo-radio" value="A">
	<Radio value="A">A</Radio>
	<Radio value="B">B</Radio>
</RadioGroup>`,
		style: `.demo-block {
	display: flex;
	align-items: center;
}

.demo-radio {
	display: flex;
	line-height: 1;
	height: 40px !important;
}`
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
				<Code {theme} lang="svelte" text={radio.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<RadioGroup class="demo-radio" value="A">
								<Radio value="A">A</Radio>
								<Radio value="B">B</Radio>
							</RadioGroup>
						</div>
					{/snippet}

					{#snippet style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}

							.demo-radio {
								display: flex;
								line-height: 1;
								height: 40px !important;
							}
						</style>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={radio.example}></Code>
			</article>

			<p>
				여기서는 <code>RadioGroup</code>안에서 생성한 <code>Fieldset</code>의 높이를 고정하기 위해
				<code>height</code>값을 추가했어요. 실제 값보다 조금 더 컸어요.
			</p>
			<article>
				<Code {theme} lang="css" text={radio.style}></Code>
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
								<td>RadioGroup</td>
								<td>value</td>
								<td>선택한 버튼의 값이에요.</td>
								<td><code>string</code></td>
								<td><code>''</code></td>
							</tr>
							<tr>
								<td>Radio</td>
								<td>value</td>
								<td>버튼의 값이에요.</td>
								<td><code>string</code></td>
								<td><code>''</code></td>
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
								<td rowspan="2">Radio</td>
								<td><code>unchecked-icon</code></td>
								<td>선택하지 않은 상태에서 보여줄 아이콘</td>
							</tr>
							<tr>
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
			next={{ href: '/components/select', title: '컴포넌트: Select' }}
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
