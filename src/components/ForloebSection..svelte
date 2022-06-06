<script>
	import Section from './Section.svelte'
	import { client } from '../routes/index.js'
	
	let forloeb;
	let today = new Date();

	const preload = async () => {
		const query = "*[_type == 'forloeb']";
		forloeb = await client.fetch(query);
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
			{#each forloeb as enhed}
				{#if noTimeRestriction(enhed) || isCampaignStillValid(enhed.startDate, enhed.endDate)}
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
		{:catch error}
			<p>Der skete en fejl, prøv igen</p>
			<p>{error}</p>
		{/await}
	</div>
</Section>

<style>
.primary-button-styling {
	background-color: teal;
	color: white;
}

</style>