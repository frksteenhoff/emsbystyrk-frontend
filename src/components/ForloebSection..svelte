<script>
	import Section from './Section.svelte'
	import { client } from '../routes/index.js'
	import buildSanityImageUrl from '../util/imageUtils' 
	
	let forloeb, billede;
	let today = new Date();

	const preload = async () => {
		const query = "*[_type == 'forloeb']";
		forloeb = await client.fetch(query);

		const imgQuery = "*[_id == '05c8fb44-feb5-417c-9762-e9a7932b1712']";
		billede = await client.fetch(imgQuery);

	}

	const stringAsDate = (date) => {
		return new Date(date);
	}

	const isCampaignStillValid = (startDate, endDate) => {
		return today > stringAsDate(startDate) && today < stringAsDate(endDate)
	}

	const noTimeRestriction = (campaign) => {
		// If none of the dates exists in the campaign object
		if((!!campaign.startDate && !!campaign.endDate) === false) {
			return true;
		} 
		return false;
	}

</script>


<Section name="Forløb" backgroundColor="light" showName={true}>
	<div class="container">
		{#await preload()}
			<p>Henter forløb ...</p>
		{:then}
			<div class="row">
				<div class="col-12 col-md-6">
					{#each forloeb as enhed}
						{#if noTimeRestriction(enhed) || isCampaignStillValid(enhed.startDate, enhed.endDate)}
							<div class="row">
								<div class="col col-xs-12">
									<div class="card mb-4">
										<h5 class="card-header">{enhed.name}</h5>
										<div class="card-body">
											{#each enhed.price as pricePair}
												<div class="row">
													<div class="col col">
														<p>{pricePair.description}</p>
													</div>
													<div class="col col-auto end">
														<p>{pricePair.price === '0' ? 'Gratis' : pricePair.price + " " + pricePair.currency} </p>
													</div>
												</div>
											{/each}
											
											<i>{enhed.comment ? enhed.comment : ''}</i>

											<br>
											<br>

											{#if enhed.campaign}
												<a href="/kontakt" class="btn primary-button-styling">Tag kontakt nu</a>
											{/if}
										</div>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
				<div class="col ml-auto">
					<img class="img-fluid basic" src={buildSanityImageUrl(billede[0].image.asset._ref)} alt="Træeningsdragter" />
				</div>
			</div>
		{:catch error}
			<p>Der skete en fejl, prøv igen</p>
			<p>{error}</p>
		{/await}
	</div>
</Section>

<style>
.primary-button-styling {
	background-color: var(--accent-color);
	color: var(--primary-text-color);
}

</style>