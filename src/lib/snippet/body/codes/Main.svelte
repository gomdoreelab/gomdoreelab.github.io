<script>
	import { Prose, Table } from 'gomdoreelab-lib-material-web';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>코드: 개요</h1>
			<p>코드 작성할 때 지켜야할 규칙이에요.</p>

			<h2>특징</h2>
			<article>
				<ul>
					<li>
						<code>Rust</code>, <code>Python</code>, 그리고 <code>Javascript</code>언어에 대한
						이야기를 주로 담고 있어요.
					</li>
				</ul>
			</article>

			<h2>목록</h2>
			<Table>
				<table>
					<thead>
						<tr>
							<th>언어(또는 프레임워크)</th>
							<th>이름</th>
							<th>설명</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="2">Svelte</td>
							<td><a href="/codes/on-mount">onMount</a></td>
							<td>onMount를 사용하는 특별한 상황이 있어요.</td>
						</tr>
						<tr>
							<td><a href="/codes/self-closing">Self-Closing</a></td>
							<td>
								태그 또는 컴포넌트를 사용할 때 자식 요소를 갖지 않는 경우 스스로 닫을 수 있어요.
							</td>
						</tr>
						<tr>
							<td rowspan="1">Javascript</td>
							<td><a href="/codes/ts-ignore">@ts-ignore</a></td>
							<td>정말 타입을 지정하기 어려운 경우에 사용할 수 있어요.</td>
						</tr>
					</tbody>
				</table>
			</Table>

			<NavigationCard
				previous={{ href: '/components/tooltips', title: '컴포넌트: Tooltips' }}
				next={{ href: '/codes/on-mount', title: '코드: onMount' }}
			/>
		</section>
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
