<script>
	// @ts-nocheck
	import { Badge, Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const badge = {
		import: `import { Badge } from 'gomdoreelab-lib-material-web';`,
		example: `<Badge>2025</Badge>`,
		small: `<Badge variant="small" style="background-color: blue;></Badge>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Badges</h1>
			<p>내비게이션 항목과 아이콘에 알림, 개수 또는 상태 정보를 표시하는데 쓰여요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={badge.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div style="padding: 1rem;">
							<Badge>2025</Badge>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={badge.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://m3.material.io/components/badges/overview">
					Metrial - Badges
				</a>와
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/badge">
					MDUI - Badge
				</a>를 참고해주세요.
			</p>

			<h2>예시</h2>
			<h3>Variants</h3>
			<p>텍스트 없이 상태 정보만 표시하려면 <code>variant=small</code>을 사용해보세요.</p>
			<article>
				<Demo height="100%">
					{#snippet _html()}
						<div style="padding: 1rem;">
							<Badge variant="small" style="background-color: blue;"></Badge>
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={badge.small}></Code>
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
								<td>Badge</td>
								<td>variant</td>
								<td>모양을 결정해요.</td>
								<td><code>'small' | 'large'</code></td>
								<td><code>'large'</code></td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/app-bar', title: '컴포넌트: App bars' }}
			next={{ href: '/components/buttons', title: '컴포넌트: Buttons' }}
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
