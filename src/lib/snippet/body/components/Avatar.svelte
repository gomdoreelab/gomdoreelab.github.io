<script>
	import { Avatar, Prose, Table } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import Gomdoreelab from '$lib/assets/images/gomdoreelab.png';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const avatar = {
		import: `import { Avatar } from 'gomdoreelab-lib-material-web';`,
		example: `import Gomdoreelab from '$lib/assets/images/gomdoreelab.png';

<Avatar src={Gomdoreelab} />`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Avatar</h1>
			<p>이미지, 아이콘 또는 캐릭터를 사용하여 사용자나 개체를 나타내는데 쓰여요.</p>

			<h2>사용법</h2>
			<p>컴포넌트를 가져와주세요:</p>

			<article>
				<Code {theme} lang="svelte" text={avatar.import}></Code>
			</article>

			<p>다음과 같이 사용하세요:</p>
			<article>
				<Demo height="100%">
					{#snippet html()}
						<div style="padding: 1rem;">
							<Avatar src={Gomdoreelab} />
						</div>
					{/snippet}
				</Demo>

				<Code {theme} lang="svelte" text={avatar.example}></Code>
			</article>

			<p>
				더 자세한 내용은
				<a target="_blank" href="https://www.mdui.org/en/docs/2/components/avatar">
					MDUI - Avatar
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
								<td>Avatar</td>
								<td>src</td>
								<td>이미지의 주소</td>
								<td><code>string</code></td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</Table>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/components/app-bar', title: '컴포넌트: App bars' }}
			next={{ href: '/components/badges', title: '컴포넌트: Badges' }}
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
