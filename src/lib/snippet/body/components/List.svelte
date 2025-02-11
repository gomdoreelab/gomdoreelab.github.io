<script>
	// @ts-nocheck
	import {
		Collapse,
		CollapseItem,
		List,
		ListItem,
		ListSubHeader,
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

	const list = {
		import: `import { List, ListItem, ListSubHeader } from 'gomdoreelab-lib-material-web';`,
		example: `<List>
	<ListItem>아이템1</ListItem>
	<ListItem>아이템2</ListItem>
</List>`,
		icon: `<List>
	<ListItem active={true} href="/">
		홈
		{#snippet _icon()}
			<Icon slot="icon" name="home"></Icon>
		{/snippet}
	</ListItem>
	
	<ListItem href="/layout">
		레이아웃
		{#snippet _icon()}
			<Icon slot="icon" name="view_sidebar"></Icon>
		{/snippet}
	</ListItem>
</List>`,
		collapse: `<List>
	<Collapse accordion value={open}>
		<CollapseItem value="/layout">
			// 상위 항목
			{#snippet _header()}
				<ListItem slot="header">
					레이아웃
					{#snippet _icon()}
						<Icon slot="icon" name="view_sidebar"></Icon>
					{/snippet}

					{#snippet _endIcon()}
						<Icon
							slot="end-icon"
							name={open === '/layout' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
						></Icon>
					{/snippet}
				</ListItem>
			{/snippet}
			
			// 하위 항목
			<div style="margin-left: 2.5rem">
				{#each layouts as layout}
					<ListItem active={page.url.pathname === layout.href} href={layout.href}>
						{layout.title}
					</ListItem>
				{/each}
			</div>
		</CollapseItem>
		
		<CollapseItem>
			...
		</CollapseItem>
	</Collapse>
</List>`,
		subheader: `<List>
	<ListSubHeader>헤더</ListSubHeader>
  <ListItem>아이템1</ListItem>
  <ListItem>아이템2</ListItem>
</List>`
	};

	let open = $state('/layout');
	const layouts = [
		{
			href: '/layout/compact',
			title: 'Compact'
		}
	];
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Lists</h1>
			<p>연속적이고 수직적인 텍스트와 이미지의 목록을 나타내는데 쓰여요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={list.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<List>
								<ListItem>아이템1</ListItem>
								<ListItem>아이템2</ListItem>
							</List>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={list.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/lists/overview">
					Metrial - Lists
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/list"> MDUI - List </a>를
				참고해주세요.
			</p>

			<h2>예시</h2>
			<h3>아이콘</h3>
			<p>아이템에 아이콘을 넣어서 사용할 수 있어요.</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<List>
								<ListItem active={true} href="/">
									홈
									{#snippet _icon()}
										<Icon slot="icon" name="home"></Icon>
									{/snippet}
								</ListItem>

								<ListItem href="/layout">
									레이아웃
									{#snippet _icon()}
										<Icon slot="icon" name="view_sidebar"></Icon>
									{/snippet}
								</ListItem>
							</List>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={list.icon}></Code>
			</article>

			<h3>Collapse</h3>
			<p>리스트는 <code>Collapse</code>를 통해 더 많은 아이템을 보여줄 수 있어요.</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<List>
								<Collapse accordion value={open}>
									<CollapseItem value="/layout">
										{#snippet _header()}
											<ListItem slot="header">
												레이아웃
												{#snippet _icon()}
													<Icon slot="icon" name="view_sidebar"></Icon>
												{/snippet}

												{#snippet _endIcon()}
													<Icon
														slot="end-icon"
														name={open === '/layout' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
													></Icon>
												{/snippet}
											</ListItem>
										{/snippet}

										<div style="margin-left: 2.5rem">
											{#each layouts as layout}
												<ListItem href={layout.href}>
													{layout.title}
												</ListItem>
											{/each}
										</div>
									</CollapseItem>

									<CollapseItem>
										{#snippet _header()}
											<ListItem slot="header">
												컴포넌트
												{#snippet _icon()}
													<Icon slot="icon" name="widgets"></Icon>
												{/snippet}

												{#snippet _endIcon()}
													<Icon
														slot="end-icon"
														name={open === '/component'
															? 'keyboard_arrow_up'
															: 'keyboard_arrow_down'}
													></Icon>
												{/snippet}
											</ListItem>
										{/snippet}

										<div style="margin-left: 2.5rem">
											{#each layouts as layout}
												<ListItem href={layout.href}>
													{layout.title}
												</ListItem>
											{/each}
										</div>
									</CollapseItem>
								</Collapse>
							</List>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={list.collapse}></Code>
			</article>

			<h3>SubHeader</h3>
			<p>사용하지마세요. 못생겼어요.</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div class="demo-block" style="padding: 1rem;">
							<List>
								<ListSubHeader>헤더</ListSubHeader>
								<ListItem>아이템1</ListItem>
								<ListItem>아이템2</ListItem>
							</List>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={list.subheader}></Code>
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
								<td rowspan="2">ListItem</td>
								<td>active</td>
								<td>아이템을 활성화해요</td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
							</tr>
							<tr>
								<td>href</td>
								<td>이동할 경로의 주소를 나타내요.</td>
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
								<td rowspan="4">ListItem</td>
								<td><code>_description</code></td>
								<td><code>description</code></td>
								<td>보조 텍스트</td>
							</tr>
							<tr>
								<td><code>_icon</code></td>
								<td><code>icon</code></td>
								<td>왼쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_endIcon</code></td>
								<td><code>end-icon</code></td>
								<td>오른쪽에 들어가는 아이콘</td>
							</tr>
							<tr>
								<td><code>_custom</code></td>
								<td><code>custom</code></td>
								<td>사용자 정의 컨텐츠</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/dropdown', title: '컴포넌트: Dropdown' }}
			next={{ href: '/components/menus', title: '컴포넌트: Menus' }}
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
