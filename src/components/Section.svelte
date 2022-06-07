<script>

	export let 
		name,
		backgroundColor = 'light',
		showName = false,
		centerText = false,
		isLandingPage = false;
</script>

<div class={`ems-section-${backgroundColor}`}>
	{#if !isLandingPage}
	<div class={`container-fluid p-3 ${showName && centerText ? 'center-text' : ''}`}>
		<div class='container mb-4'>
			{#if showName} 
			<h2 class="pb-3 pt-3 ">{name}</h2>
			{/if}
			<slot></slot>
		</div>
	</div>
	{:else}
		{#if showName}
			<h2 class="pb-3 pt-3 center-text">{name}</h2>
		{/if}
		<slot name="section-outside-container"></slot>
	{/if}
</div>

<style>
	.container {
		min-height: 200px;
	}
	.center-text {
		text-align: center;
	}
	.ems-section-light {
		background-color: var(--primary-text-color);
		color: (--secondary-text-color);
	}

	.ems-section-dark {
		background-color: var(--secondary-container-color);
		color: var(--secondary-text-color);
	}
</style>