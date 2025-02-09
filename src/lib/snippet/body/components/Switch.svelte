<script>
	// @ts-nocheck
	import { Switch, Icon, Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const code = {
		import: `import { Switch } from 'gomdoreelab-lib-material-web';`,
		example: `<Switch></Switch>`,
		checked: `<Switch {checked} onchange={() => {}}>
	{#snippet _checkedIcon()}
		<Icon slot="checked-icon" name="nightlight"></Icon>
	{/snippet}
	
	{#snippet _uncheckedIcon()}
		<Icon slot="unchecked-icon" name="highlight"></Icon>
	{/snippet}
</Switch>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Switch</h1>
			<p>항목의 선택을 켜거나 끌 수 있게 해요.</p>

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
							<Switch></Switch>
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
				<a target="_blank" href="https://m3.material.io/components/switch/overview">
					Metrial - Switch
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/switch">
					MDUI - Switch
				</a>를 참고해주세요.
			</p>

			<h2>예시</h2>
			<h3>Checked</h3>
			<p>기본 값을 줄 수 있어요!</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<Switch checked={true} onchange={() => {}}>
								{#snippet _checkedIcon()}
									<Icon slot="checked-icon" name="nightlight"></Icon>
								{/snippet}

								{#snippet _uncheckedIcon()}
									<Icon slot="unchecked-icon" name="highlight"></Icon>
								{/snippet}
							</Switch>
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

				<Code {theme} lang="svelte" text={code.checked}></Code>
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
								<td>Switch</td>
								<td>checked</td>
								<td><code>Switch</code>를 선택한 상태로 변경해요.</td>
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
								<td rowspan="2">Switch</td>
								<td><code>_uncheckedIcon</code></td>
								<td><code>unchecked-icon</code></td>
								<td>선택하지 않았을 때 나타낼 아이콘</td>
							</tr>
							<tr>
								<td><code>_checkedIcon</code></td>
								<td><code>checked-icon</code></td>
								<td>선택했을 때 나타낼 아이콘</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/snackbar', title: '컴포넌트: Snackbar' }}
			next={{ href: '/components/tabs', title: '컴포넌트: Tabs' }}
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
