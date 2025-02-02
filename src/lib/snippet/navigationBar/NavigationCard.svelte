<script>
	// @ts-nocheck
	import { Card, Icon } from 'gomdoreelab-lib-material-web';

	let { previous, next } = $props();
</script>

<section class="nav">
	<Card style="height: 100%;" href={previous.href}>
		<div class="card">
			<div class="outline">
				<Icon slot="icon" name="west"></Icon>
				이전 게시글
			</div>
			<div class="title">{previous.title}</div>
		</div>
	</Card>
	<Card style="height: 100%;" href={next.href}>
		<div class="card">
			<div class="outline">
				다음 게시글
				<Icon slot="icon" name="east"></Icon>
			</div>
			<div class="title">{next.title}</div>
		</div>
	</Card>
</section>

<style>
	.nav {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem;
		height: 100%;
	}

	.card > .outline {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.card > .title {
		font-size: var(--mdui-typescale-headline-medium-size);
	}
</style>
