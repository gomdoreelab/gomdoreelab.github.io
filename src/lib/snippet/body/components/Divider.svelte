<script>
	import { Divider, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const divider = {
		import: `import { Divider } from 'gomdoreelab-lib-material-web';`,
		example: `<Divider></Divider>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Divider</h1>
			<p>목록이나 다른 컨테이너에서 내용을 그룹화하는 얇은 선으로 쓰여요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={divider.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Divider></Divider>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={divider.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/divider/overview">
					Metrial - Divider
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/divider">
					MDUI - Divider
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
								<td rowspan="2">Divider</td>
								<td>inset</td>
								<td>왼쪽에<code>inset</code>을 추가할 수 있어요</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
							</tr>
							<tr>
								<td>middel</td>
								<td>양 끝에<code>inset</code>을 추가할 수 있어요</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/dialogs', title: '컴포넌트: Dialogs' }}
			next={{ href: '/components/dropdown', title: '컴포넌트: Dropdown' }}
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
