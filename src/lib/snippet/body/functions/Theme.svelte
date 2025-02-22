<script>
	import {
		Button,
		getHTMLTheme,
		getElementTheme,
		setElementTheme,
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

	const get = {
		import: `import { getHTMLTheme, getElementTheme } from 'gomdoreelab-lib-material-web';`,
		example: `// 현재 HTML의 테마 확인
let theme = getHTMLTheme();

// 'demo' 클래스를 가진 요소에 대한 테마 확인
let theme = getElementTheme('.demo')`,
		getHTMLTheme: `getHTMLTheme(): 'light' | 'dark' | 'auto'`,
		getElementTheme: `getElementTheme(target: string | HTMLElement): 'light' | 'dark' | 'auto'`
	};

	const set = {
		import: `import { setHTMLTheme, setElementTheme } from 'gomdoreelab-lib-material-web';`,
		example: `// 현재 HTML의 테마 변경
setHTMLTheme('dark');

// 'demo' 클래스를 가진 요소에 대한 테마 변경
setElementTheme('dark', '.demo')`,
		setHTMLTheme: `setHTMLTheme(theme: 'light' | 'dark' | 'auto'): void`,
		setElementTheme: `setElementTheme(theme: 'light' | 'dark' | 'auto', target: string | HTMLElement): void`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>함수: 테마</h1>
			<p>페이지를 밝거나 어둡게 만들 수 있어요.</p>

			<Tabs full-width value="조회" style="margin-top: 3rem;">
				<Tab value="조회">조회</Tab>
				<Tab value="설정">설정</Tab>

				{#snippet panelGet()}
					<TabPanel slot="panel" value="조회">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="javascript" text={get.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100px">
									{#snippet html()}
										<div class="demo" style="position: relative">
											<div
												class="demo-div"
												class:mdui-theme-light={theme !== 'light'}
												class:mdui-theme-dark={theme !== 'dark'}
											>
												<Button onclick={() => alert(getElementTheme('.demo-div'))}>
													demo 클래스를 가진 요소의 테마
												</Button>
											</div>
											<Button onclick={() => alert(getHTMLTheme())}>HTML 테마</Button>
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

											.demo-div {
												display: flex;
												align-items: center;
												justify-content: center;
												background-color: transparent;
												height: 100%;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="javascript" text={get.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://www.mdui.org/en/docs/2/functions/getTheme">
									MDUI - getTheme
								</a>을 참고해주세요.
							</p>

							<h2>API</h2>
							<h3>getHTMLTheme</h3>
							<p>현재 HTML에서 사용하는 테마가 무엇인지 확인할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={get.getHTMLTheme}></Code>
							</article>

							<h4>Parameters</h4>
							<p>없음</p>

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
												<td>Theme</td>
												<td><code>'light' | 'dark' | 'auto'</code></td>
												<td>HTML에서 사용하는 테마</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<h3>getElementTheme</h3>
							<p>현재 <code>target</code>에서 사용하는 테마가 무엇인지 확인할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={get.getElementTheme}></Code>
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
												<td>target</td>
												<td>테마를 확인할 요소를 지정할 수 있어요.</td>
												<td><code>string | HTMLElement</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

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
												<td>Theme</td>
												<td><code>'light' | 'dark' | 'auto'</code></td>
												<td>HTML에서 사용하는 테마</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelSet()}
					<TabPanel slot="panel" value="설정">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="javascript" text={set.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100px">
									{#snippet html()}
										<div class="demo" style="position: relative">
											<div class="demo-set-div">
												<Button
													onclick={() => {
														let currentTheme = getElementTheme('.demo-set-div');

														setElementTheme(
															currentTheme === 'light' ? 'dark' : 'light',
															'.demo-set-div'
														);
													}}
												>
													demo 클래스를 가진 요소의 테마 변경
												</Button>
											</div>
											<Button
												onclick={() => appState.setTheme(theme === 'light' ? 'dark' : 'light')}
											>
												HTML 테마 변경
											</Button>
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

											.demo-set-div {
												display: flex;
												align-items: center;
												justify-content: center;
												background-color: transparent;
												height: 100%;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="javascript" text={set.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://www.mdui.org/en/docs/2/functions/setTheme">
									MDUI - setTheme
								</a>을 참고해주세요.
							</p>

							<h2>API</h2>
							<h3>setHTMLTheme</h3>
							<p>현재 HTML에서 사용하는 테마를 변경할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={set.setHTMLTheme}></Code>
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
												<td>theme</td>
												<td>변경할 테마</td>
												<td><code>'light' | 'dark' | 'auto'</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<h4>Response</h4>
							<p>없음</p>

							<h3>setElementTheme</h3>
							<p>현재 <code>target</code>에서 사용하는 테마를 변경할 수 있어요</p>
							<article>
								<Code {theme} lang="javascript" text={set.setElementTheme}></Code>
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
												<td>theme</td>
												<td>변경할 테마</td>
												<td><code>'light' | 'dark' | 'auto'</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>target</td>
												<td>테마를 변경할 요소</td>
												<td><code>string | HTMLElement</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<h4>Response</h4>
							<p>없음</p>
						</div>
					</TabPanel>
				{/snippet}

				{@render panelGet()}
				{@render panelSet()}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/functions', title: '함수: 개요' }}
			next={{ href: '/functions/color', title: '함수: 색상' }}
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
