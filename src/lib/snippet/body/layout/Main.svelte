<script>
	import { Prose } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	let codes = {
		good: `<Compact>
...
</Compact>`,
		bad: `<div class="some-cards..">
	<Compact>
	...
	</Compact>
</div>
`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>레이아웃: 개요</h1>
			<p>사용자의 화면(Window) 크기에 맞는 구성을 제공해요.</p>

			<h2>사용법</h2>
			<p>라이브러리를 설치해주세요:</p>

			<article>
				<Code {theme} lang="bash" text={'npm install gomdoreelab-lib-grid-web'}></Code>
			</article>

			<h2>특징</h2>
			<article>
				<ul>
					<li>
						화면 크기에 따라 <code>compact</code>, <code>medium</code>, <code>expanded</code>,
						<code>large</code>, <code>extra-large</code> 5개로 구분해요.
					</li>
					<li>
						<a target="_blank" href="https://m3.material.io/foundations/adaptive-design">
							적응형(Adaptive)
						</a>
						디자인을 적용하기 위해 노력하고 있어요.
					</li>
				</ul>
			</article>

			<h2>창의 개수</h2>
			<p>
				화면의 크기와 창(Pane)의 개수에 따라 구조가 변하기 때문에, 내용에 알맞는 조합을 선택하는
				것이 좋아요.
			</p>
			<article>
				<div class="mdui-table">
					<table>
						<thead>
							<tr>
								<th>이름</th>
								<th>화면의 크기</th>
								<th>권장하는 창의 개수</th>
								<th>가능한 창의 개수</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Compact</td>
								<td class="math">{'width < 600px'}</td>
								<td>1</td>
								<td>-</td>
							</tr>
							<tr>
								<td>Medium</td>
								<td class="math">{'600px <= width < 840px'}</td>
								<td>1</td>
								<td>2</td>
							</tr>
							<tr>
								<td>Expanded</td>
								<td class="math">{'840px <= width < 1200px'}</td>
								<td>2</td>
								<td>1</td>
							</tr>
							<tr>
								<td>Large</td>
								<td class="math">{'1200px <= width < 1600px'}</td>
								<td>2</td>
								<td>1</td>
							</tr>
							<tr>
								<td>Extra-large</td>
								<td class="math">{'1600px >= width'}</td>
								<td>2</td>
								<td>1, 3</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p>
					더 자세한 내용은
					<a
						target="_blank"
						href="https://m3.material.io/foundations/layout/applying-layout/window-size-classes"
					>
						Applying layout
					</a>을 참고해주세요.
				</p>
			</article>

			<h2>주의사항</h2>
			<p>
				페이지를 구성하는 시작점으로만 사용하세요. 페이지 내 요소로 사용하는 것은 고려하지 않았어요.
			</p>
			<h3>좋은 사용법</h3>
			<article>
				<Code {theme} lang="svelte" text={codes.good}></Code>
			</article>

			<h3>나쁜 사용법</h3>
			<article>
				<Code {theme} lang="svelte" text={codes.bad}></Code>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/', title: '홈' }}
			next={{ href: '/layout/compact', title: '레이아웃: Compact' }}
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

	.math {
		font-family: var(--gl-font-family-code);
	}
</style>
