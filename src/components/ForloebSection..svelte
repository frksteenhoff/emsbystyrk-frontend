<script>
	import Section from './Section.svelte'
	import { client } from '../routes/index.js'
	
	let forloeb;

	const preload = async () => {
		const query = "*[_type == 'forloeb']";
		forloeb = await client.fetch(query);
	}
</script>


<Section name="Forløb" backgroundColor="light" showName={true}>
	<div class="container">
		{#await preload()}
			<p>Henter data</p>
		{:then}
			{#each forloeb as enhed}
				<div class="row">
					<div class="col col-xs-12 col-lg-8">
						<div class="card mb-4">
							<h5 class="card-header">{enhed.name}</h5>
							<div class="card-body">
								{#each enhed.price as pricePair}
									<div class="row">
										<div class="col col">
											<p>{pricePair.description}</p>
										</div>
										<div class="col col-auto end">
											<p>{pricePair.price} {pricePair.currency}</p>
										</div>
									</div>
								{/each}
								
								<i>{enhed.comment ? enhed.comment : ''}</i>

								<br>
								<br>

								{#if enhed.campaign}
									<a href="/kontakt" class="btn btn-info">Tag kontakt nu</a>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		{:catch error}
			<p>Der skete en fejl, prøv igen</p>
			<p>{error}</p>
		{/await}
	</div>
</Section>

