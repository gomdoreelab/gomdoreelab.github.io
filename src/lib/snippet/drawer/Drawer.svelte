<script>
	import {
		Drawer,
		Collapse,
		CollapseItem,
		List,
		ListItem,
		ListSubHeader,
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
		{ href: '/components/avatar', title: 'Avatar' },
		{ href: '/components/badges', title: 'Badges' },
		{ href: '/components/buttons', title: 'Buttons' },
		{ href: '/components/cards', title: 'Cards' },
		{ href: '/components/checkbox', title: 'Checkbox' },
		{ href: '/components/chips', title: 'Chips' },
		{ href: '/components/collapse', title: 'Collapse' },
		{ href: '/components/dialogs', title: 'Dialogs' },
		{ href: '/components/divider', title: 'Divider' },
		{ href: '/components/dropdown', title: 'Dropdown' },
		{ href: '/components/lists', title: 'Lists' },
		{ href: '/components/menus', title: 'Menus' },
		{ href: '/components/navigation', title: 'Navigation' },
		{ href: '/components/progress-indicators', title: 'Progress indicators' },
		{ href: '/components/radio-button', title: 'Radio button' },
		{ href: '/components/select', title: 'Select' },
		{ href: '/components/sliders', title: 'Sliders' },
		{ href: '/components/snackbar', title: 'Snackbar' },
		{ href: '/components/switch', title: 'Switch' },
		{ href: '/components/tabs', title: 'Tabs' },
		{ href: '/components/text-fields', title: 'Text fields' },
		{ href: '/components/tooltips', title: 'Tooltips' }
	];

	const functions = [
		{ href: '/functions', title: '개요' },
		{ href: '/functions/theme', title: '테마' },
		{ href: '/functions/color', title: '색상' },
		{ href: '/functions/size', title: '크기' }
	];

	const materials = [{ href: '/materials', title: '개요' }];

	const codes = [
		{ href: '/codes', title: '개요' },
		{ subtitle: 'Svelte' },
		{ href: '/codes/on-mount', title: 'onMount' },
		{ href: '/codes/self-closing', title: 'Self-Closing' },
		{ href: '/codes/snippet', title: 'Snippet' },
		{ subtitle: 'Javascript' },
		{ href: '/codes/optional-chaining', title: 'Optional Chaining(?.)' },
		{ href: '/codes/ts-ignore', title: '@ts-ignore' }
	];

	onMount(() => {
		if (page.url.pathname.startsWith('/layout')) {
			open = '/layout';
		} else if (page.url.pathname.startsWith('/components')) {
			open = '/components';
		} else if (page.url.pathname.startsWith('/functions')) {
			open = '/functions';
		} else if (page.url.pathname.startsWith('/material')) {
			open = '/material';
		} else if (page.url.pathname.startsWith('/codes')) {
			open = '/codes';
		} else {
			open = '/';
		}
	});
</script>

<Drawer open="true" contained="false" {...props}>
	<List>
		<ListItem active={page.url.pathname === '/'} href="/">
			홈

			{#snippet icon()}
				<Icon slot="icon" name="home" />
			{/snippet}

			{@render icon()}
		</ListItem>

		<Collapse accordion value={open}>
			<CollapseItem value="/layout" onopen={() => (open = '/layout')} onclose={() => (open = '')}>
				{#snippet layout()}
					<ListItem slot="header">
						레이아웃

						{#snippet icon()}
							<Icon slot="icon" name="view_sidebar" />
							<Icon
								slot="end-icon"
								name={open === '/layout' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							/>
						{/snippet}

						{@render icon()}
					</ListItem>
				{/snippet}

				{@render layout()}

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
				onopen={() => (open = '/components')}
				onclose={() => (open = '')}
			>
				{#snippet component()}
					<ListItem slot="header">
						컴포넌트

						{#snippet icon()}
							<Icon slot="icon" name="widgets" />
							<Icon
								slot="end-icon"
								name={open === '/components' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							/>
						{/snippet}

						{@render icon()}
					</ListItem>
				{/snippet}

				{@render component()}

				<div style="margin-left: 2.5rem">
					{#each components as component}
						<ListItem active={page.url.pathname === component.href} href={component.href}>
							{component.title}
						</ListItem>
					{/each}
				</div>
			</CollapseItem>

			<CollapseItem
				value="/functions"
				onopen={() => (open = '/functions')}
				onclose={() => (open = '')}
			>
				{#snippet func()}
					<ListItem slot="header">
						함수

						{#snippet icon()}
							<Icon slot="icon" name="functions" />
							<Icon
								slot="end-icon"
								name={open === '/functions' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							/>
						{/snippet}

						{@render icon()}
					</ListItem>
				{/snippet}

				{@render func()}

				<div style="margin-left: 2.5rem">
					{#each functions as func}
						<ListItem active={page.url.pathname === func.href} href={func.href}>
							{func.title}
						</ListItem>
					{/each}
				</div>
			</CollapseItem>

			<CollapseItem
				value="/material"
				onopen={() => (open = '/material')}
				onclose={() => (open = '')}
			>
				{#snippet material()}
					<ListItem slot="header">
						디자인

						{#snippet icon()}
							<Icon slot="icon" name="draw" />
							<Icon
								slot="end-icon"
								name={open === '/material' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							/>
						{/snippet}

						{@render icon()}
					</ListItem>
				{/snippet}

				{@render material()}

				<div style="margin-left: 2.5rem">
					{#each materials as material}
						<ListItem active={page.url.pathname === material.href} href={material.href}>
							{material.title}
						</ListItem>
					{/each}
				</div>
			</CollapseItem>

			<CollapseItem value="/codes" onopen={() => (open = '/codes')} onclose={() => (open = '')}>
				{#snippet code()}
					<ListItem slot="header">
						코드

						{#snippet icon()}
							<Icon slot="icon" name="code" />
							<Icon
								slot="end-icon"
								name={open === '/codes' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
							/>
						{/snippet}

						{@render icon()}
					</ListItem>
				{/snippet}

				{@render code()}

				<div style="margin-left: 2.5rem">
					{#each codes as code}
						{#if code.subtitle}
							<ListSubHeader style="font-weight: 700;">{code.subtitle}</ListSubHeader>
						{:else}
							<ListItem active={page.url.pathname === code.href} href={code.href}>
								{code.title}
							</ListItem>
						{/if}
					{/each}
				</div>
			</CollapseItem>
		</Collapse>
	</List>
</Drawer>
