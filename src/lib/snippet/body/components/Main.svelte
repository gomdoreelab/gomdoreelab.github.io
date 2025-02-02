<script>
	// @ts-nocheck
	import { Prose, Card } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>컴포넌트: 개요</h1>
			<p>머티리얼(Material) 디자인을 적용한 요소들이에요. 사용자 인터페이스를 만드는데 쓰여요.</p>

			<h2>사용법</h2>
			<p>라이브러리를 설치해주세요:</p>

			<article>
				<Code lang="bash" text={'npm install gomdoreelab-lib-material-web'}></Code>
			</article>

			<h2>특징</h2>
			<article>
				<ul>
					<li>
						<a href="https://www.mdui.org/en/">MDUI<sup>*</sup></a>에서 제공하는 컴포넌트를 사용하고
						있어요.
					</li>
					<li>
						<a href="https://m3.material.io/components">컴포넌트(Components)</a>
						가이드라인을 따르려고 노력해요.
					</li>
				</ul>

				<p class="information" style="margin-top: 3rem;">
					* MDUI는 웹 컴포넌트를 사용하여 머티리얼 디자인을 적용한 커스텀 UI 컴포넌트이에요.
				</p>
			</article>
		</section>

		<NavigationCard
			previous={{ href: '/layout/extra-large', title: '레이아웃: Extra-large' }}
			next={{ href: '/components/app-bar', title: '컴포넌트: App bars' }}
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
