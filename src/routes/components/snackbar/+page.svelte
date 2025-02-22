<script>
	import { CompactLong, Medium, Large, Expanded, ExtraLargeTP } from 'gomdoreelab-lib-grid-web';
	import TopMediumAppBar from '$lib/snippet/appBar/TopMedium.svelte';
	import Rail from '$lib/snippet/rail/Rail.svelte';
	import Drawer from '$lib/snippet/drawer/Drawer.svelte';
	import State from '$lib/snippet/state/State.svelte';
	import Body from '$lib/snippet/body/components/Snackbar.svelte';
	import NavigationTitle from '$lib/snippet/navigationBar/NavigationTitle.svelte';
</script>

<State>
	{#snippet layout(
		/** @type {{ breakpoint: "compact" | "medium" | "expanded" | "large" | "extraLarge"; theme: "light" | "dark" | "auto"; }} */ appState
	)}
		{@const { breakpoint, theme } = appState}
		{#if ['compact'].includes(breakpoint)}
			<CompactLong>
				{#snippet header()}
					<TopMediumAppBar {appState} target="#compact" />
				{/snippet}

				{#snippet body()}
					<Body {appState} />
				{/snippet}
			</CompactLong>
		{:else if ['medium'].includes(breakpoint)}
			<Medium>
				{#snippet header()}
					<TopMediumAppBar {appState} target="#medium" order={1} />
				{/snippet}

				{#snippet body()}
					<Body {appState} />
				{/snippet}

				{#snippet rail()}
					<Rail />
				{/snippet}
			</Medium>
		{:else if ['expanded'].includes(breakpoint)}
			<Expanded>
				{#snippet header()}
					<TopMediumAppBar {appState} target="#expanded" order={1} />
				{/snippet}

				{#snippet body()}
					<Body {appState} />
				{/snippet}

				{#snippet rail()}
					<Rail />
				{/snippet}
			</Expanded>
		{:else if ['large'].includes(breakpoint)}
			<Large>
				{#snippet header()}
					<TopMediumAppBar {appState} target="#large" order={1} />
				{/snippet}

				{#snippet body()}
					<Body {appState} />
				{/snippet}

				{#snippet drawer()}
					<Drawer />
				{/snippet}
			</Large>
		{:else if ['extraLarge'].includes(breakpoint)}
			<ExtraLargeTP placement="right">
				{#snippet header()}
					<TopMediumAppBar {appState} target="#extra-large" order={1} />
				{/snippet}

				{#snippet body()}
					<Body {appState} />
				{/snippet}

				{#snippet complement()}
					<NavigationTitle />
				{/snippet}

				{#snippet drawer()}
					<Drawer />
				{/snippet}
			</ExtraLargeTP>
		{/if}
	{/snippet}
</State>
