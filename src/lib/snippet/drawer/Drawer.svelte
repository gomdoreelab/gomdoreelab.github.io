<script>
	// @ts-nocheck
	import {
		Drawer,
		Collapse,
		CollapseItem,
		List,
		ListItem,
		ButtonIcon,
		Icon
	} from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let { ...props } = $props();
	let open = $state('');

	const layouts = [
		{ href: '/layout', title: '개요' },
		{ href: '/layout/compact', title: 'Compact' },
		{ href: '/layout/medium', title: 'Medium' },
		{ href: '/layout/expanded', title: 'Expanded' },
		{ href: '/layout/large', title: 'Large' },
		{ href: '/layout/extra-large', title: 'Extra Large' }
	];
	const components = [
		{ href: '/components', title: '개요' },
		{ href: '/components/app-bar', title: 'App bars' },
		{ href: '/components/badges', title: 'Badges' },
		{ href: '/components/buttons', title: 'Buttons' },
		{ href: '/components/cards', title: 'Cards' },
		{ href: '/components/checkbox', title: 'Checkbox' },
		{ href: '/components/chips', title: 'Chips' },
		{ href: '/components/dialogs', title: 'Dialogs' },
		{ href: '/components/divider', title: 'Divider' },
		{ href: '/components/lists', title: 'Lists' },
		{ href: '/components/menus', title: 'Menus' },
		{ href: '/components/navigation', title: 'Navigation' },
		{ href: '/components/progress-indicators', title: 'Progress indicators' },
		{ href: '/components/radio-button', title: 'Radio button' },
		{ href: '/components/slider', title: 'Slider' },
		{ href: '/components/snackbar', title: 'Snackbar' },
		{ href: '/components/switch', title: 'Switch' },
		{ href: '/components/tabs', title: 'Tabs' },
		{ href: '/components/textfield', title: 'Text fields' },
		{ href: '/components/tooltip', title: 'Tooltips' }
	];

	onMount(() => {
		open = page.url.pathname.startsWith('/layout')
			? '/layout'
			: page.url.pathname.startsWith('/components')
				? '/components'
				: page.url.pathname.startsWith('/material')
					? '/material'
					: page.url.pathname.startsWith('/code')
						? '/code'
						: '/';
	});
</script>

<Drawer open="true" contained="false" {...props}>
	<List>
		<ListItem active={page.url.pathname === '/'} href="/">
			홈
			{#snippet _icon()}
				<Icon slot="icon" name="home"></Icon>
			{/snippet}
		</ListItem>

		<Collapse accordion value={open}>
			<CollapseItem
				value="/layout"
				onopen={(event) => {
					console.log(event);
					open = '/layout';
				}}
				onclose={(event) => {
					console.log(event);
					open = '';
				}}
			>
				{#snippet _header()}
					<ListItem slot="header">
						레이아웃
						{#snippet _icon()}
							<Icon slot="icon" name="view_sidebar"></Icon>
						{/snippet}

						{#snippet _endIcon()}
							<Icon
								slot="end-icon"
								name={open === '/layout' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							></Icon>
						{/snippet}
					</ListItem>
				{/snippet}
				<div style="margin-left: 2.5rem">
					{#each layouts as layout}
						<ListItem active={page.url.pathname === layout.href} href={layout.href}>
							{layout.title}
						</ListItem>
					{/each}
				</div>
			</CollapseItem>

			<CollapseItem
				value="/components"
				onopen={(event) => (open = '/components')}
				onclose={(event) => (open = '')}
			>
				{#snippet _header()}
					<ListItem slot="header">
						컴포넌트
						{#snippet _icon()}
							<Icon slot="icon" name="widgets"></Icon>
						{/snippet}

						{#snippet _endIcon()}
							<Icon
								slot="end-icon"
								name={open === '/components' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							></Icon>
						{/snippet}
					</ListItem>
				{/snippet}
				<div style="margin-left: 2.5rem">
					{#each components as component}
						<ListItem active={page.url.pathname === component.href} href={component.href}>
							{component.title}
						</ListItem>
					{/each}
				</div>
			</CollapseItem>
		</Collapse>

		<ListItem active={page.url.pathname === '/material'} href="/material">
			디자인
			{#snippet _icon()}
				<Icon slot="icon" name="draw"></Icon>
			{/snippet}
		</ListItem>

		<ListItem active={page.url.pathname === '/code'} href="/code">
			코드
			{#snippet _icon()}
				<Icon slot="icon" name="code"></Icon>
			{/snippet}
		</ListItem>
	</List>
</Drawer>
