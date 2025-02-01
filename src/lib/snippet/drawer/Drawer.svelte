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
				onopen={(event) => (open = '/layout')}
				onclose={() => (open = '')}
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
					<ListItem active={page.url.pathname === '/layout'} href="/layout">개요</ListItem>
					<ListItem active={page.url.pathname === '/layout/compact'} href="/layout/compact">
						Compact
					</ListItem>
				</div>
			</CollapseItem>

			<CollapseItem
				value="/components"
				onopen={() => (open = '/components')}
				onclose={() => (open = '')}
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
					<ListItem active={page.url.pathname === '/components'} href="/layout">개요</ListItem>
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
