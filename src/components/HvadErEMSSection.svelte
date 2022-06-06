<script>
	import Section from './Section.svelte'
	import BlockToText from './BlockToText.svelte'
	import { client } from '../routes/index.js' 
	import buildSanityImageUrl from '../util/imageUtils'

	let section, imageUrl;

	const preload = async () => {
		const query = "*[_id == '0eef387a-f9d4-4561-b175-7a9161d09ada']";
		section = await client.fetch(query);

		const imageRef = section[0].sectionImage.asset._ref;
		imageUrl = buildSanityImageUrl(imageRef);	
	}

</script>

{#await preload()}
	
	{:then}
	<Section name={section.name} backgroundColor={section.colorDark ? 'dark' : 'light'} showName={section.showName}>
		<div class="container">
			<div class="row mb-4">
				<img src={imageUrl} alt="EMS træning">
			</div>
			<div class="row">
				<div class="col col-sm-12">
					<BlockToText block={section[0] ? section[0].text : ''} />	
				</div>
			</div>
		</div>
	</Section>
	{:catch error}
		<p>{error}</p>
{/await}