<script>
	import { Button, Dialog, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	let isDialogOpen = $state({
		example: false,
		overlayClick: false
	});

	const dialog = {
		import: `import { Dialog } from 'gomdoreelab-lib-material-web';`,
		example: `let isDialogOpen = $state(false);

<Dialog open={isDialogOpen}>
	<Button onclick={() => (isDialogOpen = false)}>
		Close Dialog
	</Button>
</Dialog>

<Button onclick={() => (isDialogOpen = true)}>
	Open Dialog
</Button>`,
		overlayClick: `let isDialogOpen = $state(false);

<Dialog
	open={isDialogOpen}
	onclose={() => (isDialogOpen = false)}
	close-on-overlay-click
>
	어두워진 곳(Overlay)을 선택해보세요.
</Dialog>

<Button onclick={() => (isDialogOpen = true)}>
	Open Dialog
</Button>
`
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
				<Code {theme} lang="svelte" text={dialog.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Dialog open={isDialogOpen.example}>
								<Button onclick={() => (isDialogOpen.example = false)}>Close Dialog</Button>
							</Dialog>
							<Button onclick={() => (isDialogOpen.example = true)}>Open Dialog</Button>
						</div>
					{/snippet}

					{#snippet style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}
						</style>
					{/snippet}
				</Demo>

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

			<h2>예시</h2>
			<h3>Overlay Click</h3>
			<p><code>Overlay</code>를 선택하여 창을 닫을 수 있어요.</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Dialog
								open={isDialogOpen.overlayClick}
								onclose={() => (isDialogOpen.overlayClick = false)}
								close-on-overlay-click
							>
								어두워진 곳(Overlay)을 선택해보세요.
							</Dialog>

							<Button onclick={() => (isDialogOpen.overlayClick = true)}>Open Dialog</Button>
						</div>
					{/snippet}

					{#snippet style()}
						<style>
							.demo-block {
								display: flex;
								align-items: center;
							}
						</style>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={dialog.overlayClick}></Code>
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
								<td rowspan="3">Dialog</td>
								<td>open</td>
								<td><code>Dialog</code>를 열어요.</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
							</tr>
							<tr>
								<td>fullscreen</td>
								<td>전체 화면으로 나타낼 수 있어요.</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
							</tr>
							<tr>
								<td>close-on-overlay-click</td>
								<td>오버레이를 클릭했을 때<code>Dialog</code>를 닫아요.</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
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
								<td rowspan="5">Dialog</td>
								<td><code>header</code></td>
								<td>
									상단에 위치하며, <code>icon</code>과 <code>headline</code>슬롯을 기본으로 해요.
								</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>상단에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>headline</code></td>
								<td>상단에 들어가는 제목</td>
							</tr>
							<tr>
								<td><code>description</code></td>
								<td>제목 아래 설명</td>
							</tr>
							<tr>
								<td><code>action</code></td>
								<td>하단 액션 바에 위치하는 항목(Elements)</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/collapse', title: '컴포넌트: Collapse' }}
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
