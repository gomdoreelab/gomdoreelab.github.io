<script>
	import {
		getResizeObserver,
		getBreakPoint,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';
	import { onMount } from 'svelte';

	let { appState, ...props } = $props();

	let width = $state(0);

	const getResize = {
		import: `import { getResizeObserver } from 'gomdoreelab-lib-material-web';`,
		example: `// 이벤트 추가할 대상
const demo = document.querySelector('.demo');

// 가로 길이
let width = $state(0);

// 이벤트 추가
const observer = getResizeObserver(demo, function(entry, observer) {
		width = entry.contentRect.width;
})`,
		getResizeObserver: `getResizeObserver(element: string | HTMLElement, callback: Callback): ObserverResize`,
		ObserverResize: `{
  unobserve: () => void;
}`
	};

	const addBreakPoint = {
		import: `import { addBreakPointEvent } from 'gomdoreelab-lib-material-web';`,
		example: `// 설정
let breakpoint = $state('');

// 적응형 화면 제어
breakpointHandler = {
	compact: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'compact';
	},
	medium: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'medium';
	},
	expanded: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'expanded';
	},
	large: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'large';
	},
	extraLarge: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'extraLarge';
	}
};

// 적응형 화면 제어 이벤트
addBreakPointEvent(breakpointHandler);`,
		addBreakPointEvent: `addBreakPointEvent(callback: Callback): void`,
		addBreakHandler: `callback = {
	compact: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'compact';
	},
	medium: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'medium';
	},
	expanded: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'expanded';
	},
	large: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'large';
	},
	extraLarge: (/** @type {{ matches: boolean; }} */ event) => {
		if (event.matches) breakpoint = 'extraLarge';
	}
}`
	};

	const getBreak = {
		import: `import { getBreakPoint } from 'gomdoreelab-lib-material-web';`,
		example: `// 현재 화면 크기
let breakpoint = getBreakpoint();`,
		getBreakPoint: `getBreakPoint(): Layout`
	};

	onMount(() => {
		const demo = document.querySelector('.demo-flexible');
		const observer = getResizeObserver(
			demo,
			function (
				/** @type {{ contentRect: { width: number; }; }} */ entry,
				/** @type {any} */ _observer
			) {
				width = entry.contentRect.width;
			}
		);
	});
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>함수: 크기</h1>
			<p>어떤 요소의 크기 변화를 감지하거나, 화면의 가로 길이를 감지하는데 쓰여요.</p>

			<Tabs full-width value="Resize" style="margin-top: 3rem;">
				<Tab value="Resize">Resize</Tab>
				<Tab value="AddBreakPoint">AddBreakPoint</Tab>
				<Tab value="GetBreakPoint">GetBreakPoint</Tab>

				{#snippet panelResize()}
					<TabPanel slot="panel" value="Resize">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="javascript" text={getResize.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<ul>
								<li>화면에서 <code>div</code>의 크기를 변경해보세요.</li>
							</ul>
							<article>
								<Demo height="100px">
									{#snippet html()}
										<div class="demo" style="position: relative">
											<div class="demo-flexible">
												가로 길이: {width}px
											</div>
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo {
												display: flex;
												align-items: center;
												justify-content: center;
												gap: 1rem;
												height: 100%;
												width: 100%;
											}

											.demo-flexible {
												display: flex;
												align-items: center;
												justify-content: center;
												gap: 1rem;
												height: 60px;
												width: 50%;
												resize: horizontal;
												overflow: hidden;
												border: 0.0625rem solid rgb(var(--mdui-color-outline));
												border-radius: var(--mdui-shape-corner-small);
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="javascript" text={getResize.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://www.mdui.org/en/docs/2/functions/observeResize">
									MDUI - observeResize
								</a>를 참고해주세요.
							</p>

							<h2>API</h2>
							<h3>getResizeObserver</h3>
							<p>지정한 요소의 크기 변경을 감지할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={getResize.getResizeObserver}></Code>
							</article>

							<h4>Parameters</h4>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>이름</th>
												<th>설명</th>
												<th>타입</th>
												<th>기본값</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>element</td>
												<td>이벤트를 추가할 대상</td>
												<td><code>string | HTMLImageElement</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>callback</td>
												<td>크기 변경이 발생할 때 실행하는 함수</td>
												<td><code>Callback</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<div class="deep">
								<h4>Callback</h4>
								<p>크기 변경이 발생할 때 실행하는 함수에요.</p>

								<h4>Parameters</h4>
								<article>
									<Table>
										<table>
											<thead>
												<tr>
													<th>이름</th>
													<th>설명</th>
													<th>타입</th>
													<th>기본값</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>entry</td>
													<td>변경된 크기</td>
													<td><code>ResizeObserverEntry</code></td>
													<td>-</td>
												</tr>
												<tr>
													<td>observer</td>
													<td>현재 객체</td>
													<td><code>ObserveResize</code></td>
													<td>-</td>
												</tr>
											</tbody>
										</table>
									</Table>
								</article>

								<h4>Response</h4>
								<p>없음</p>
							</div>

							<h4>Response</h4>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>이름</th>
												<th>타입</th>
												<th>설명</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>ObserveResize</td>
												<td><code>ObserveResize</code></td>
												<td>현재 객체</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<div class="deep">
								<h4>ObserveResize</h4>
								<p>이벤트를 중단시킬 수 있는 객체에요.</p>
								<article>
									<Code {theme} lang="javascript" text={getResize.ObserverResize}></Code>
								</article>
							</div>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelAddBreakPoint()}
					<TabPanel slot="panel" value="AddBreakPoint">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="javascript" text={addBreakPoint.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="javascript" text={addBreakPoint.example}></Code>
							</article>

							<h2>API</h2>
							<h3>addBreakPointEvent</h3>
							<p>사용하는 기기의 가로 길이를 변경할 때 이벤트가 발생해요.</p>
							<article>
								<Code {theme} lang="javascript" text={addBreakPoint.addBreakPointEvent}></Code>
							</article>

							<h4>Parameters</h4>
							<article>
								<Table>
									<table>
										<thead>
											<tr>
												<th>이름</th>
												<th>설명</th>
												<th>타입</th>
												<th>기본값</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>callback</td>
												<td>가로 길이를 변경할 때 실행할 함수</td>
												<td><code>Callback</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<div class="deep">
								<h4>Callback</h4>
								<p>가로 길이를 변경할 때 현재 레이아웃을 알 수 있어요.</p>
								<article>
									<Code {theme} lang="javascript" text={addBreakPoint.addBreakHandler}></Code>
								</article>

								<h4>Parameters</h4>
								<Table>
									<table>
										<thead>
											<tr>
												<th>이름</th>
												<th>설명</th>
												<th>타입</th>
												<th>기본값</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>event</td>
												<td>가로 길이 변경 이벤트</td>
												<td><code>MediaQueryListEvent</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<h4>Response</h4>
								<p>없음</p>
							</div>

							<h4>Response</h4>
							<p>없음</p>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelGetBreakPoint()}
					<TabPanel slot="panel" value="GetBreakPoint">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="javascript" text={getBreak.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100px">
									{#snippet html()}
										<div class="demo" style="position: relative">
											현재 화면 크기: {getBreakPoint()}
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo {
												display: flex;
												align-items: center;
												justify-content: center;
												gap: 1rem;
												height: 100%;
												width: 100%;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="javascript" text={getBreak.example}></Code>
							</article>

							<h2>API</h2>
							<h3>getBreakPoint</h3>
							<p>현재 사용하는 기기의 가로 길이를 통해 레이아웃을 알 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={getBreak.getBreakPoint}></Code>
							</article>

							<h4>Parameters</h4>
							<p>없음</p>

							<h4>Response</h4>
							<Table>
								<table>
									<thead>
										<tr>
											<th>이름</th>
											<th>설명</th>
											<th>타입</th>
											<th>기본값</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Layout</td>
											<td>가로 길이로 분류된 레이아웃</td>
											<td>
												<code>'compact' | 'medium' | 'expanded' | 'large' | 'extraLarge'</code></td
											>
											<td>-</td>
										</tr>
									</tbody>
								</table>
							</Table>
						</div>
					</TabPanel>
				{/snippet}

				{@render panelResize()}
				{@render panelAddBreakPoint()}
				{@render panelGetBreakPoint()}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/functions/theme', title: '함수: 테마' }}
			next={{ href: '/components/avatar', title: '컴포넌트: Avatar' }}
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

	.panel {
		padding: 2rem 1rem;
	}
</style>
