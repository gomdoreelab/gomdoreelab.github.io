<script>
	// @ts-nocheck
	import { Prose, Card } from 'gomdoreelab-lib-material-web';

	let { appState, ...props } = $props();
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>개요</h1>
			<p>사용자의 화면(Window) 크기에 맞는 구성을 제공합니다.</p>

			<h2>특징</h2>
			<article>
				<ul>
					<li>
						화면 크기에 따라 <code>compact</code>, <code>medium</code>, <code>expanded</code>,
						<code>large</code>, <code>extra-large</code> 5개로 구분합니다.
					</li>
					<li>
						<a href="https://m3.material.io/foundations/adaptive-design">적응형(Adaptive)</a>
						디자인을 따르기 위하여 노력합니다.
					</li>
				</ul>

				<h3>창의 개수</h3>
				<p>
					화면의 크기와 창(Pane)의 개수에 따라 구조가 변하기 때문에, 내용에 알맞는 조합을 선택하는
					것이 좋습니다.
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
									<td class="math">{'1600px <= width'}</td>
									<td>2</td>
									<td>1, 3</td>
								</tr>
							</tbody>
						</table>
					</div>

					더 자세한 내용은
					<a href="https://m3.material.io/foundations/layout/applying-layout/window-size-classes">
						Applying layout
					</a>에서 확인하세요.
				</article>
			</article>
		</section>

		<section></section>
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

	li {
		list-style: '-';
	}

	.math {
		font-family: var(--gl-font-family-code);
	}
</style>
