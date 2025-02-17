<script>
	// @ts-nocheck
	import {
		Button,
		getColorFromImageSource,
		setColorSchemeHTML,
		setColorSchemeElements,
		removeColorSchemeHTML,
		removeColorSchemeElements,
		Prose,
		Table,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import Gomdoreelab from '$lib/assets/images/gomdoreelab.png';
	import { Medium } from 'gomdoreelab-lib-grid-web';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	let color = $state('#D9D250');
	let demoColor = $state('#D9D250');

	const get = {
		import: `import { getColorFromImageSource } from 'gomdoreelab-lib-material-web';`,
		example: `// 이미지에서 색상 추출
let color = await getColorFromImageSource('image.png');`,
		getColorFromImageSource: `getColorFromImageSource(image: string | HTMLImageElement): Promise<string>`
	};

	const set = {
		import: `import { setColorSchemeHTML } from 'gomdoreelab-lib-material-web';`,
		example: `// 현재 HTML의 색상 변경
setColorSchemeHTML('#D9D250');

// 요소의 색상 변경
setColorSchemeElements('#D9D250', {
	target: '.demo'
}) `,
		setColorSchemeHTML: `setColorSchemeHTML(color: string, contrast: number): void`,
		setColorSchemeElements: `setColorSchemeElements(color: string, options: Options): void`
	};

	const remove = {
		import: `import { removeColorSchemeHTML } from 'gomdoreelab-lib-material-web';`,
		example: `// 현재 HTML의 색상 제거
removeColorSchemeHTML();

// 요소의 색상 제거
removeColorSchemeElements('.demo')
`,
		removeColorSchemeHTML: `removeColorSchemeHTML(): void`,
		removeColorSchemeElements: `removeColorSchemeElements(target: string | HTMLElement): void`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>함수: 색상</h1>
			<p>이미지에서 색상을 추출하거나, 페이지의 색상을 변경할 수 있어요.</p>

			<Tabs full-width value="조회" style="margin-top: 3rem;">
				<Tab value="조회">조회</Tab>
				<Tab value="설정">설정</Tab>
				<Tab value="삭제">삭제</Tab>

				{#snippet _panel()}
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
									{#snippet _html()}
										<div class="demo" style="position: relative">
											<img class="demo-get-image" src={Gomdoreelab} alt="로고" />
											<Button
												onclick={async () => {
													let imageColor = await getColorFromImageSource(Gomdoreelab);

													alert(imageColor);
												}}
											>
												이미지 색상 확인
											</Button>
										</div>
									{/snippet}
									{#snippet _style()}
										<style>
											.demo {
												display: flex;
												align-items: center;
												justify-content: center;
												gap: 1rem;
												height: 100%;
												width: 100%;
											}

											.demo > .demo-get-image {
												margin: 0;
												height: 2rem;
												width: 2rem;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="javascript" text={get.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://www.mdui.org/en/docs/2/functions/getColorFromImage"
								>
									MDUI - getColorFromImage
								</a>를 참고해주세요.
							</p>

							<h2>API</h2>
							<h3>getColorFromImageSource</h3>
							<p>이미지에서 가장 지배적인 색상 코드(HEX)를 확인할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={get.getColorFromImageSource}></Code>
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
												<td>image</td>
												<td>색상을 확인할 이미지</td>
												<td><code>string | HTMLImageElement</code></td>
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
												<td>color</td>
												<td><code>{'Promise<string>'}</code></td>
												<td>이미지에서 추출한 색상 코드(HEX)</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>
						</div>
					</TabPanel>

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
									{#snippet _html()}
										<div class="demo" style="position: relative">
											<span>HTML: {color}</span>
											<input
												class="color-picker"
												type="color"
												value={color}
												onchange={(event) => {
													// 이벤트를 통한 색 추출
													color = event.target.value;

													// 색 변경
													appState.setColor(color);
												}}
											/>
										</div>
										<div class="demo" style="position: relative">
											<span>DEMO: {demoColor}</span>
											<input
												class="color-picker"
												type="color"
												value={demoColor}
												onchange={(event) => {
													// 이벤트를 통한 색 추출
													demoColor = event.target.value;

													// 색 변경
													setColorSchemeElements(demoColor, { target: '.demo' });
												}}
											/>
										</div>
									{/snippet}
									{#snippet _style()}
										<style>
											.demo {
												display: flex;
												align-items: center;
												justify-content: center;
												gap: 1rem;
												height: 100%;
												width: 100%;
											}

											.color-picker {
												border: none;
												background-color: transparent;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="javascript" text={set.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://www.mdui.org/en/docs/2/functions/setColorScheme">
									MDUI - setColorScheme
								</a>을 참고해주세요.
							</p>

							<h2>API</h2>
							<h3>setColorSchemeHTML</h3>
							<p>현재 HTML에서 사용하는 색상을 변경할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={set.setColorSchemeHTML}></Code>
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
												<td>color<sup>*</sup></td>
												<td>변경할 색상</td>
												<td><code>string</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>contrast</td>
												<td>
													<p>대비</p>
													<p>-1.0 - 1.0 사이의 값을 사용하며, 1.0에 가까울 수록 높은 대비</p>
												</td>
												<td><code>number</code></td>
												<td>0</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<p class="information">* 색상을 표현하는 HEX 값(ex: #D9D250)을 사용해야해요.</p>
							</article>

							<h4>Response</h4>
							<p>없음</p>

							<h3>setColorSchemeElements</h3>
							<p>특정 요소에서 사용하는 색상을 변경할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={set.setColorSchemeElements}></Code>
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
												<td>color<sup>*</sup></td>
												<td>변경할 색상</td>
												<td><code>string</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>options</td>
												<td>적용할 대상, 디자인 토큰 등에 대한 설정</td>
												<td><code>Options</code></td>
												<td>{'{}'}</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<p class="information">* 색상을 표현하는 HEX 값(ex: #D9D250)을 사용해야해요.</p>
							</article>

							<h4>Options</h4>
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
												<td>적용할 대상</td>
												<td><code>string | HTMLElement</code></td>
												<td><code>document.documentElement</code></td>
											</tr>
											<tr>
												<td>customColors</td>
												<td>디자인 토큰 등에 대한 설정</td>
												<td><code>CustomColor[]</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>
							</article>

							<h4>CustomColor</h4>
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
												<td>name</td>
												<td>디자인 토큰에 적용할 이름</td>
												<td><code>string</code></td>
												<td>-</td>
											</tr>
											<tr>
												<td>value<sup>*</sup></td>
												<td>디자인 토큰에 적용할 값</td>
												<td><code>string</code></td>
												<td>-</td>
											</tr>
										</tbody>
									</table>
								</Table>

								<p class="information">* 색상을 표현하는 HEX 값(ex: #D9D250)을 사용해야해요.</p>
							</article>

							<h4>Response</h4>
							<p>없음</p>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="삭제">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="javascript" text={remove.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100px">
									{#snippet _html()}
										<div class="demo" style="position: relative">
											<span>HTML: {color}</span>
											<Button
												onclick={() => {
													// 색상 제거
													removeColorSchemeHTML();

													color = '#0099ff';
													appState.setColor(color);
												}}
											>
												색상 제거
											</Button>
										</div>
										<div class="demo" style="position: relative">
											<span>DEMO: {demoColor}</span>
											<Button
												onclick={() => {
													// 색상 제거
													removeColorSchemeElements('.demo');

													// 초기화
													demoColor = color;
												}}
											>
												색상 제거
											</Button>
										</div>
									{/snippet}
									{#snippet _style()}
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

								<Code {theme} lang="javascript" text={remove.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://www.mdui.org/en/docs/2/functions/removeColorScheme"
								>
									MDUI - removeColorScheme
								</a>을 참고해주세요.
							</p>

							<h2>API</h2>
							<h3>removeColorSchemeHTML</h3>
							<p>현재 HTML에서 사용하는 색상을 제거할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={remove.removeColorSchemeHTML}></Code>
							</article>

							<h4>Parameters</h4>
							<p>없음</p>

							<h4>Response</h4>
							<p>없음</p>

							<h3>removeColorSchemeElements</h3>
							<p>지정한 요소에서 사용하는 색상을 제거할 수 있어요.</p>
							<article>
								<Code {theme} lang="javascript" text={remove.removeColorSchemeElements}></Code>
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
												<td>색상을 제거할 대상</td>
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
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/functions/theme', title: '함수: 테마' }}
			next={{ href: '/functions/size', title: '함수: 크기' }}
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
