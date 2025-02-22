<script>
	import { Prose, Chip } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		example: `const panel = Array.from(document.querySelectorAll('mdui-tab-panel'))
	// @ts-ignore
	.filter((panel) => panel.value === value)
	.at(0);`,
		error: `Property 'value' does not exist on type 'Element'.js(2339)`,
		nocheck: `// @ts-nocheck`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>코드: @ts-ignore</h1>
			<div class="title-chips">
				<Chip href="/codes#javascript">#Javascript</Chip>
			</div>

			<p>타입을 지정하기 어려운 경우 사용할 수 있어요.</p>

			<h2>사용법</h2>
			<p>타입 지정을 피할 코드 바로 위에 주석을 추가해주세요.</p>
			<article>
				<Code {theme} lang="svelte" text={codes.example} />
			</article>

			<p>만약 <code>@ts-ignore</code>을 사용하지 않았다면, 아래 에러가 발생해요</p>
			<article>
				<Code {theme} lang="svelte" text={codes.error} />
			</article>

			<h2>@ts-nocheck</h2>
			<p>
				가급적 사용하지 않는 것이 좋아요. 어느 부분에서 문제가 되는지 확인하기 어려울 수 있어요.
			</p>
			<p>만약 사용한다면 파일의 시작점에 사용해주세요.</p>
			<article>
				<Code {theme} lang="javascript" text={`${codes.nocheck}`} />
			</article>

			<NavigationCard
				previous={{ href: '/codes/optional-chaining', title: '코드: Optional Chaining(?.)' }}
				next={{ href: '/functions/theme', title: '함수: 테마' }}
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
