<script>
	import {
		CircularProgress,
		LinearProgress,
		Prose,
		TabPanel,
		Tabs,
		Tab
	} from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import Demo from '$lib/snippet/code/Demo.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const circular = {
		import: `import { CircularProgress } from 'gomdoreelab-lib-material-web';`,
		example: `<CircularProgress />`
	};

	const linear = {
		import: `import { LinearProgress } from 'gomdoreelab-lib-material-web';`,
		example: `<LinearProgress />`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>Progress indicators</h1>
			<p>작업의 진행 상황을 실시간으로 보여주는데 사용해요.</p>

			<Tabs full-width value="Circular" style="margin-top: 3rem;">
				<Tab value="Circular">Circular</Tab>
				<Tab value="Linear">Linear</Tab>

				{#snippet panelCircular()}
					<TabPanel slot="panel" value="Circular">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={circular.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<CircularProgress />
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={circular.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/components/progress-indicators/overview"
								>
									Metrial - Progress indicators
								</a>와
								<a
									target="_blank"
									href="https://www.mdui.org/en/docs/2/components/circular-progress"
								>
									MDUI - Circular Progress
								</a>를 참고해주세요.
							</p>
						</div>
					</TabPanel>
				{/snippet}

				{#snippet panelLinear()}
					<TabPanel slot="panel" value="Linear">
						<div class="panel">
							<h2>사용법</h2>
							<p>컴포넌트를 가져와주세요:</p>

							<article>
								<Code {theme} lang="svelte" text={linear.import}></Code>
							</article>

							<p>다음과 같이 사용하세요:</p>
							<article>
								<Demo height="100%">
									{#snippet html()}
										<div class="demo-block" style="padding: 1rem;">
											<LinearProgress />
										</div>
									{/snippet}

									{#snippet style()}
										<style>
											.demo-block {
												display: flex;
												align-items: center;
											}
										</style>
									{/snippet}
								</Demo>

								<Code {theme} lang="svelte" text={linear.example}></Code>
							</article>

							<p>
								더 자세한 내용은
								<a
									target="_blank"
									href="https://m3.material.io/components/progress-indicators/overview"
								>
									Metrial - Progress indicators
								</a>와
								<a target="_blank" href="https://www.mdui.org/en/docs/2/components/linear-progress">
									MDUI - Linear Progress
								</a>를 참고해주세요.
							</p>
						</div>
					</TabPanel>
				{/snippet}

				{@render panelCircular()}
				{@render panelLinear()}
			</Tabs>
		</section>

		<NavigationCard
			previous={{ href: '/components/navigation', title: '컴포넌트: Navigation' }}
			next={{ href: '/components/radio-button', title: '컴포넌트: Radio button' }}
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
