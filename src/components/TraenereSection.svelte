<script>
	import Section from './Section.svelte'
	import TraenerComponent from "./TraenerComponent.svelte"
	import { client } from '../routes/index.js'
	import buildSanityImageUrl from '../util/imageUtils' 
		  
	let traenere;

	const preload = async () => {
		const query = "*[_type == 'traener-info']";
		traenere = await client.fetch(query);
	}

</script> 

{#await preload()}
	<div class="base-page"></div>
{:then}
	<Section name="Dine trænere" backgroundColor="light" showName={false}>
		<div class="container">
			<div class="row">
				{#each traenere as traener}
					<div class="col-12 col-lg-6">
						<TraenerComponent
							name={traener.navn}
							image={buildSanityImageUrl(traener.traenerBillede.asset._ref)}
							intro={traener.intro} 	
							mainText={traener.broedtekst}
						/>
					</div>
				{/each}
			</div>
		</div>
	</Section>
	{:catch error}
		<p>{error}</p>
{/await}
