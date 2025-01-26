<script>
	// @ts-nocheck
	import { Compact, Medium } from 'gomdoreelab-lib-grid-web';
	import {
		AppBarTop,
		AppBarTopTitle,
		AppBarBottom,
		getBreakPoint,
		addBreakPointEvent,
		ButtonIcon,
		Icon,
		Bar,
		BarItem,
		setColorSchemeHTML,
		Tooltip,
		Dropdown,
		Menu,
		MenuItem,
		getHTMLTheme,
		setHTMLTheme
	} from 'gomdoreelab-lib-material-web';
	import { onMount } from 'svelte';

	// 적응형 화면 제어
	let breakpoint = $state();
	const breakpointHandler = {
		compact: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'compact';
		},
		medium: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'medium';
		},
		expanded: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'expanded';
		},
		large: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'large';
		},
		extraLarge: (/** @type {{ matches: boolean; }} */ event) => {
			if (event.matches) breakpoint = 'extraLarge';
		}
	};

	// 태마
	let theme = $state();

	onMount(() => {
		// 적응형 화면 제어
		breakpoint = getBreakPoint();
		addBreakPointEvent(breakpointHandler);

		theme = getHTMLTheme();
	});
</script>

{#if breakpoint === 'compact'}
	<Compact footerType="navigation">
		{#snippet _header()}
			<AppBarTop
				variant="medium"
				scroll-target=".compact > .body"
				scroll-behavior="shrink"
				scroll-threshold="30"
			>
				<ButtonIcon>
					<Icon name="menu"></Icon>
				</ButtonIcon>
				<AppBarTopTitle>곰도리연구소</AppBarTopTitle>

				<Dropdown>
					{#snippet _trigger()}
						<div slot="trigger">
							<Tooltip content="테마">
								<ButtonIcon>
									<Icon name="wb_sunny--outlined"></Icon>
								</ButtonIcon>
							</Tooltip>
						</div>
					{/snippet}
					<Menu
						selects="single"
						value={theme}
						onchange={(event) => {
							theme = event.target.value;
							setHTMLTheme(theme);
						}}
					>
						<MenuItem value="light">Light</MenuItem>
						<MenuItem value="dark">Dark</MenuItem>
					</Menu>
				</Dropdown>
			</AppBarTop>
		{/snippet}
		{#snippet _body()}
			<div class="content">gg</div>
		{/snippet}
		{#snippet _footer()}
			<Bar label-visibility="labeled">
				<BarItem value="Grid">
					Grid
					{#snippet _icon()}
						<Icon slot="icon" name="grid_4x4"></Icon>
					{/snippet}
				</BarItem>
				<BarItem value="Material">
					Material
					{#snippet _icon()}
						<Icon slot="icon" name="brush"></Icon>
					{/snippet}
				</BarItem>
				<BarItem value="준비">
					-
					{#snippet _icon()}
						<Icon slot="icon" name="question_mark"></Icon>
					{/snippet}
				</BarItem>
				<BarItem value="준비">
					-
					{#snippet _icon()}
						<Icon slot="icon" name="question_mark"></Icon>
					{/snippet}
				</BarItem>
			</Bar>
		{/snippet}
	</Compact>
{:else}
	by
{/if}
