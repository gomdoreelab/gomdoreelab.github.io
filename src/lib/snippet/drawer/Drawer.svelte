<script>
	// @ts-nocheck
	import { Drawer, List, ListItem, ButtonIcon, Icon } from 'gomdoreelab-lib-material-web';
	import { page } from '$app/state';
</script>

<Drawer open="true" contained="false">
	<List>
		<ListItem active={page.url.pathname === '/'} href="/">
			홈
			{#snippet _icon()}
				<Icon slot="icon" name="home"></Icon>
			{/snippet}
		</ListItem>

		<ListItem active={page.url.pathname === '/layout'} href="/layout">
			레이아웃
			{#snippet _icon()}
				<Icon slot="icon" name="view_sidebar"></Icon>
			{/snippet}
		</ListItem>

		<ListItem active={page.url.pathname === '/components'} href="/components">
			컴포넌트
			{#snippet _icon()}
				<Icon slot="icon" name="widgets"></Icon>
			{/snippet}
		</ListItem>

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
