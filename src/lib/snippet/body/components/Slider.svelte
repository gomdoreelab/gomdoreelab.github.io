<script>
	// @ts-nocheck
	import { Prose, Table, TabPanel, Tabs, Tab } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const slider = {
		import: `import { Slider } from 'gomdoreelab-lib-material-web';`,
		example: `<Slider></Slider>`
	};

	const range = {
		import: `import { SliderRange } from 'gomdoreelab-lib-material-web';`,
		example: `<SliderRange></SliderRange>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Sliders</h1>
			<p>일정 범위 내에서 값을 선택할 수 있게 해요.</p>

			<Tabs full-width value="Slider" style="margin-top: 3rem;">
				<Tab value="Slider">Slider</Tab>
				<Tab value="Range">Range</Tab>

				{#snippet _panel()}
					<TabPanel slot="panel" value="Slider">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={slider.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={slider.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/sliders/overview">
									Metrial - Sliders
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/slider">
									MDUI - Slider
								</a>를 참고해주세요.
							</p>
						</div>
					</TabPanel>

					<TabPanel slot="panel" value="Range">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code lang="svelte" text={range.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Code {theme} lang="svelte" text={range.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a target="_blank" href="https://m3.material.io/components/sliders/overview">
									Metrial - Sliders
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/range-slider">
									MDUI - Range Slider
								</a>를 참고해주세요.
							</p>
						</div>
					</TabPanel>
				{/snippet}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/components/radio-button', title: '컴포넌트: Radio button' }}
			next={{ href: '/components/snackbar', title: '컴포넌트: Snackbar' }}
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
