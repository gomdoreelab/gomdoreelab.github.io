<script>
	// @ts-nocheck
	import { Compact, Medium, Large, Expanded, ExtraLarge } from 'gomdoreelab-lib-grid-web';
	import TopMediumAppBar from '$lib/snippet/appBar/TopMedium.svelte';
	import NavigationBar from '$lib/snippet/navigationBar/NavigationBar.svelte';
	import Rail from '$lib/snippet/rail/Rail.svelte';
	import Drawer from '$lib/snippet/drawer/Drawer.svelte';
	import State from '$lib/snippet/state/State.svelte';
	import Body from '$lib/snippet/body/components/ProgressIndicator.svelte';
</script>

<State>
	{#snippet _breakpoint(appState)}
		{@const { breakpoint, theme } = appState}
		{#if ['compact'].includes(breakpoint)}
			<Compact>
				{#snippet _header()}
					<TopMediumAppBar {appState} target="#compact" />
				{/snippet}
				{#snippet _body()}
					<Body {appState} />
				{/snippet}
				{#snippet _footer()}
					<NavigationBar />
				{/snippet}
			</Compact>
		{:else if ['medium'].includes(breakpoint)}
			<Medium>
				{#snippet _header()}
					<TopMediumAppBar {appState} target="#medium" order={1} />
				{/snippet}
				{#snippet _body()}
					<Body {appState} />
				{/snippet}
				{#snippet _rail()}
					<Rail />
				{/snippet}
			</Medium>
		{:else if ['expanded'].includes(breakpoint)}
			<Expanded>
				{#snippet _header()}
					<TopMediumAppBar {appState} target="#expanded" order={1} />
				{/snippet}
				{#snippet _body()}
					<Body {appState} />
				{/snippet}
				{#snippet _rail()}
					<Rail />
				{/snippet}
			</Expanded>
		{:else if ['large'].includes(breakpoint)}
			<Large>
				{#snippet _header()}
					<TopMediumAppBar {appState} target="#large" order={1} />
				{/snippet}
				{#snippet _body()}
					<Body {appState} />
				{/snippet}
				{#snippet _drawer()}
					<Drawer />
				{/snippet}
			</Large>
		{:else if ['extraLarge'].includes(breakpoint)}
			<ExtraLarge>
				{#snippet _header()}
					<TopMediumAppBar {appState} target="#extra-large" order={1} />
				{/snippet}
				{#snippet _body()}
					<Body {appState} />
				{/snippet}
				{#snippet _drawer()}
					<Drawer />
				{/snippet}
			</ExtraLarge>
		{/if}
	{/snippet}
</State>
