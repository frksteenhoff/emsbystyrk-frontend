<script>
	export let block, showInContainer = true;
</script>

{#if showInContainer}
<div class='container mb-4 img-fade-in'>
	<div class="row">
		<div class="col p-3">
			{#each block as part}
				{#if part.listItem && part.children.length <= 1}
					<p class={part.children[0].marks[0] === 'strong' ? 'bold' : ''}>{@html '&bull;'} {part.children[0].text}</p>
				{:else}
					{#if part.children.length > 1}
						{#each part.children as sentence, i (i)}
							{#if i === 0}
								<span class={sentence.marks[0] === 'strong' ? 'bold' : ''}>{@html '&bull;'} {sentence.text}</span>
							{:else}
								<span class={sentence.marks[0] === 'strong' ? 'bold' : ''}>{sentence.text}</span>
							{/if}
						{/each}
					{:else}
						<p class={part.children[0].marks[0] === 'strong' ? 'bold' : ''}>{part.children[0].text}</p>
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</div>
{:else}
	{#each block as part}
		{#if part.listItem && part.children.length <= 1}
			<p>{@html '&bull;'} {part.children[0].text}</p>
		{:else}
			{#if part.children.length > 1}
				{#each part.children as sentence}
					<!-- check for whether we are working with a link -->
					{#if sentence.marks.length === 1 && sentence.marks[0] === part.markDefs[0]._key}
						<span><a href={part.markDefs[0].href}>{sentence.text}</a></span>
					{:else}
						<span>{sentence.text}</span>
					{/if}
				{/each}
			{:else}
				<p class={part.children[0].marks[0] === 'strong' ? 'bold' : ''}>{part.children[0].text}</p>
			{/if}
		{/if}
	{/each}
{/if}

<style>
	.bold {
		font-weight: bold;
	}
    a {
		color: var(--link-color);
		text-decoration: none;
	}

	a:hover {
	    opacity: 0.5;
	}
</style>