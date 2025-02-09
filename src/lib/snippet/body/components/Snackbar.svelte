<script>
	// @ts-nocheck
	import {
		Snackbar,
		ButtonIcon,
		Icon,
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
	let isSnackbarOpen = $state(false);

	const snackbar = {
		import: `import { Snackbar } from 'gomdoreelab-lib-material-web';`,
		example: `let isSnackbarOpen = $state(false);

<Snackbar open={isSnackbarOpen} onclose={() => (isSnackbarOpen = false)}>
	코드를 복사했어요
</Snackbar>

<ButtonIcon onclick={() => (isSnackbarOpen = true)}>
	<Icon name="content_copy"></Icon>
</ButtonIcon>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Snackbar</h1>
			<p>화면 하단에 앱 작업에 대한 간단한 업데이트를 보여줘요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={snackbar.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<Snackbar open={isSnackbarOpen} onclose={() => (isSnackbarOpen = false)}>
								코드를 복사했어요
							</Snackbar>

							<ButtonIcon onclick={() => (isSnackbarOpen = true)}>
								<Icon name="content_copy"></Icon>
							</ButtonIcon>
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

				<Code {theme} lang="svelte" text={snackbar.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/snackbar/overview">
					Metrial - Snackbar
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/snackbar">
					MDUI - Snackbar
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
								<td>Snackbar</td>
								<td>open</td>
								<td><code>Snackbar</code>를 열어요.</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
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
								<td rowspan="3">Snackbar</td>
								<td><code>_action</code></td>
								<td><code>action</code></td>
								<td>오른쪽 작업 버튼</td>
							</tr>
							<tr>
								<td><code>_closeButton</code></td>
								<td><code>close-button</code></td>
								<td>오른쪽 닫기 버튼. 단 <code>closeable</code>을 설정한 경우에만 보여요.</td>
							</tr>
							<tr>
								<td><code>_closeIcon</code></td>
								<td><code>close-icon</code></td>
								<td>오른쪽 닫기 버튼 아이콘</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/sliders', title: '컴포넌트: Sliders' }}
			next={{ href: '/components/switch', title: '컴포넌트: Switch' }}
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
