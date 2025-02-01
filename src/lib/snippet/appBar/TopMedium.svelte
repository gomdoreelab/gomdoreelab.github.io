<script>
	// @ts-nocheck
	import {
		AppBarTop,
		AppBarTopTitle,
		ButtonIcon,
		Icon,
		Tooltip,
		Dropdown,
		Menu,
		MenuItem,
		Avatar
	} from 'gomdoreelab-lib-material-web';
	import GomdoreeLab from '$lib/assets/images/gomdoreelab.png';

	let { appState, target, ...props } = $props();
</script>

<AppBarTop variant="medium" scroll-behavior="shrink elevate" scroll-target={target} {...props}>
	<ButtonIcon>
		<Avatar src={GomdoreeLab} style="height: 24px; width: 24px;"></Avatar>
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
			value={appState.theme}
			onchange={(event) => appState.setTheme(event.target.value)}
		>
			<MenuItem value="light">Light</MenuItem>
			<MenuItem value="dark">Dark</MenuItem>
		</Menu>
	</Dropdown>
</AppBarTop>
