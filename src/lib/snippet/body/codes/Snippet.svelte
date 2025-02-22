<script>
	import { Prose, Chip } from 'gomdoreelab-lib-material-web';
	import Code from '$lib/snippet/code/Code.svelte';
	import NavigationCard from '$lib/snippet/navigationBar/NavigationCard.svelte';

	let { appState, ...props } = $props();
	const codes = {
		example: `{#snippet home()}
	<Icon slot="icon" name="home" ...>
{/snippet}`,
		error: `<Dropdown>
	{#snippet trigger()}
		<Button slot="trigger">열기</Button>
	{/snippet}
	{@render trigger()}
</Dropdown>`,
		errorMessage: `Uncaught TypeError: this.trigger.split is not a function
    at Dropdown2.hasTrigger (index.js:294:39)
    at Dropdown2.onMouseEnter (index.js:334:36)`,
		workaround: `{#snippet trigger()}
	<Button slot="trigger">열기</Button>
{/snippet}
		
<Dropdown>
	{@render trigger()}
</Dropdown>`,
		slots: `{#snippet panelTop()}
	<TabPanel slot="panel" />
{/#snippet}
{#snippet panelBottom()}
	<TabPanel slot="panel" />
{/#snippet}

{@render panelTop()}
{@render panelBottom()}`,
		where: `<Dropdown>
	{#snippet menu()}
		<Button slot="trigger">열기</Button>
	{/snippet}
	{@render menu()}
</Dropdown>`
	};
</script>

<Prose {...props}>
	{@const { breakpoint, theme } = appState}
	<div class="content">
		<section>
			<h1>코드: Snippet</h1>
			<div class="title-chips">
				<Chip href="/codes#svelte">#Svelte</Chip>
			</div>

			<p>snippet 위치, 작성 방법과 관련한 규칙이 있어요.</p>

			<h2>이름</h2>
			<p>
				<code>snippet</code>내에 포함할 이름을 대표하나, 내부에서 사용하는 Slot 이름과 겹치지 않게
				준비하세요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.example} />
			</article>

			<h3>겹친다면?</h3>
			<p>
				<code>snippet</code>과 <code>render</code>의 위치에 따라 사실 달라요. 그렇지만 다음과 같은
				문제가 있을 수 있어요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.error} />
			</article>
			<p>
				이럴 때 에러 메세지는 다음과 같았어요. 에러 메세지는 다양하게 발생할 수 있고, 단순히 <code
					>render</code
				>가 정상적으로 나타나지 않을 수도 있어요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.errorMessage} />
			</article>
			<p>
				그럼에도 <code>snippet</code>의 이름을 변경하기 어렵다면 다음과 같은 방법을 고려해보세요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.workaround} />
			</article>
			<p class="information">
				* 가급적 <code>snippet</code>과 <code>render</code>를 가까운 곳에 배치하는 것을 권장하고
				있어요.
			</p>

			<h2>Slot</h2>
			<p>
				<code>slot</code>을 사용하는 컴포넌트의 경우 <code>snippet</code>사용을 고려해야해요.
				컴포넌트 내 <code>slot</code>이름을 중복해서 사용하는 경우 정상적으로 나타나지 않아요.
			</p>
			<article>
				<Code {theme} lang="svelte" text={codes.slots} />
			</article>

			<h2>위치</h2>
			<p><code>snippet</code>과 <code>render</code>를 가까운 곳에 배치하세요. 직관적인게 좋아요.</p>
			<article>
				<Code {theme} lang="svelte" text={codes.where} />
			</article>

			<NavigationCard
				previous={{ href: '/codes/self-closing', title: '코드: Self-Closing' }}
				next={{ href: '/codes/optional-chaining', title: '코드: Optional Chaining(?.)' }}
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
