<script>
	import Section from './Section.svelte'
	import BlockToText from "./BlockToText.svelte";
	import { client } from '../routes/index'
	import buildSanityImageUrl from '../util/imageUtils'
    import { whyEMSObj } from '../stores.js'
    import hasValues from '../util/utils'

	let imageUrl;

	const preload = async () => {
        if(!hasValues($whyEMSObj)) {
			const whyEMSQuery = "*[_id == 'a949f1f7-1a3b-4269-8893-53a8758b03c3']";
			let whySection = await client.fetch(whyEMSQuery);
			
			// Add why ems section to store 
			whyEMSObj.set(whySection);
		}

		const imageRef = $whyEMSObj[0].sectionImage.asset._ref;
		imageUrl = buildSanityImageUrl(imageRef);	
	}
</script>

{#await preload()}
	<div class="base-page"></div>
{:then}
	<div>
		<Section name={""} backgroundColor={"dark"} isLandingPage={true}>
			<span slot="section-outside-container">
				<div class="img-container">
					<h1 class="header-shadow caption top-center img-fade-in">{$whyEMSObj[0].name}</h1>
					<img src={imageUrl} class="img-fluid pb-4" alt="EMS træning">
				</div>
			</span>
		</Section>
		
		<Section name="" backgroundColor={"dark"} showName={false}>
			<BlockToText block={$whyEMSObj[0] ? $whyEMSObj[0].text : ''} />
		</Section>
	</div>
	{:catch error}
		<p>Der skete en fejl, prøv igen</p>
		<p>{error}</p>
{/await}

<style>	
	.caption{
		font-size: 40px;
		font-family: 'Callibri', sans-serif;
	}

	.img-container {
		width: 100%;
		display: inline-block;
		position: relative;
		text-align: center;
		color: var(--primary-container-color);
	}

    .top-center {
   		position: absolute;
		top: 60px;
		left: 60%;
		transform: translate(-90%, -50%);
	}

	.header-shadow {
		text-shadow: 1px 1px 4px #7A7A7A;
	}

</style>