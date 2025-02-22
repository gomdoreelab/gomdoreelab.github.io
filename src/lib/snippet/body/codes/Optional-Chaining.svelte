<script>
	import { Prose, Chip } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		example: `onchange={(event) => {
	// event: Event | null
	color = event?.target?.value;

	setColorSchemeElements(color, { target: '.demo' });
}}`,
		no: `if (event) {
	color = event.target.value;
}`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>코드: Optional Chaining(?.)</h1>
			<div class="title-chips">
				<Chip href="/codes#javascript">#Javascript</Chip>
			</div>

			<p>변수가 <code>nullish</code>인 경우 바로 <code>undefined</code>를 반환해요.</p>

			<h2>사용법</h2>
			<p>
				변수의 타입이 null일 수도 있는 경우 변수 뒤에 <code>?.</code>를 붙여주세요. 변수가
				<code>null</code>이라면 <code>color</code>는 <code>undefined</code>로 정의할 거에요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.example} />
			</article>
			<p>
				만약 Optional Chaining을 사용하지 않는다면, 조건문을 통해 해당 변수가 <code>null</code>인지
				아닌지 확인해야해요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.no} />
			</article>

			<p>
				더 자세한 내용은
				<a
					target="_blank"
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
				>
					MDN - Optional chaining (?.)
				</a>를 참고해주세요.
			</p>

			<NavigationCard
				previous={{ href: '/codes/snippet', title: '코드: Snippet' }}
				next={{ href: '/codes/ts-ignore', title: '코드: @ts-ignore' }}
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
