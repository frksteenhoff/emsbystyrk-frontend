<script>
	import Section from './Section.svelte'
	import { client } from '../routes/index.js'
	import buildSanityImageUrl from '../util/imageUtils' 

	let aabningstider, billeder;

	const preload = async () => {
		const query = "*[_type == 'aabningstider']";
		aabningstider = await client.fetch(query);

		const imgQuery = "*[_type == 'billede']";
		billeder = await client.fetch(imgQuery);
		console.log(billeder);
	}

</script> 

{#await preload()}
	<!-- do nothing -->
{:then}
	<Section name="Kontakt" backgroundColor="light" showName={true}>
		<div class="container">
			<div class="row">
				<div class="col">
					<img class="img-fluid" src={buildSanityImageUrl(billeder[0].image.asset._ref)} alt="Venteværelse" />
				</div>
				<div class="col-1"></div>
				<div class="col col-xs-12 col-md-4">
					<div class="row p-3 hours-text rounded" style="background-color: var(--accent-color)">
						<p><strong>{aabningstider[0].name}</strong></p>
						{#each aabningstider[0].openingHours as tid}
						<div class="row">
							<div class="col">
								<p>{tid.days}</p>
							</div>
							<div class="col-auto">
								{tid.timeRange}
							</div>
						</div>
						{/each}
						<div class="row">
							{#if aabningstider[0].comment}
							<i>{aabningstider.comment}</i>
							{/if}
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-5"></div>
			<hr>
			<div class="row mt-5 mb-5">
				<h2 class="no-padding mb-4">Find os her</h2>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2193.129191680148!2d12.372847985606974!3d55.7240054557241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525078175ede85%3A0xa59cd55568f216e1!2sTempovej%2030%2C%202750%20Ballerup!5e0!3m2!1sen!2sdk!4v1655901578110!5m2!1sen!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	</Section>
{:catch error}
	<p>{error}</p>
{/await}

<style>
	.hours-text {
		color: var(--primary-text-color);
	}
	.no-padding {
		padding: 0;
	}

	img:hover {
		opacity: 0.9;
	}
	hr {
		color: var(--accent-color);
		border-width: 5px;
	}
</style>