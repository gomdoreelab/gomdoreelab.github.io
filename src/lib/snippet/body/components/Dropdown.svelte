<script>
	import { Button, Dropdown, Menu, MenuItem, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();

	const dropdown = {
		import: `import { Button, Dropdown, Menu, MenuItem } from 'gomdoreelab-lib-material-web';`,
		example: `<Dropdown>
	{#snippet trigger()}
		<Button slot="trigger">열기</Button>
	{/snippet}
	{@render trigger()}

	<Menu>
		<MenuItem>사과</MenuItem>
		<MenuItem>딸기</MenuItem>
	</Menu>
</Dropdown>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Dropdown</h1>
			<p>팝업 컨트롤에 특정 내용을 표시하며, 보통 메뉴와 함께 사용해요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={dropdown.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div class="demo-block" style="padding: 1rem;">
							<Dropdown>
								{#snippet button()}
									<Button slot="trigger">열기</Button>
								{/snippet}
								{@render button()}

								<Menu>
									<MenuItem>사과</MenuItem>
									<MenuItem>딸기</MenuItem>
								</Menu>
							</Dropdown>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={dropdown.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/dropdown">
					MDUI - Dropdown
				</a>을 참고해주세요.
			</p>

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
								<td>Dropdown</td>
								<td><code>trigger</code></td>
								<td><code>Dropdown</code>을 활성화할 수 있는 요소</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/divider', title: '컴포넌트: Divider' }}
			next={{ href: '/components/lists', title: '컴포넌트: Lists' }}
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
