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
	<Section name={""} backgroundColor={"dark"} isLandingPage={true}>
		<span slot="section-outside-container">
			<div class="img-container">
				<h1 class="header-shadow caption top-center img-fade-in">{section[0].name}</h1>
				<img src={imageUrl} class="img-fluid" alt="EMS træning tablet">
			</div>
		</span>
	</Section>
	<Section name="" backgroundColor={section.colorDark ? 'dark' : 'light'} showName={false}>
		<BlockToText block={section[0] ? section[0].text : ''} />	
	</Section>
	{:catch error}
		<p>Der skete en fejl, prøv igen</p>
		<p>{error}</p>
{/await}

<style>
	.caption{
		font-size: 40px;
		font-family: 'Callibri', Tahoma, Geneva, Verdana, sans-serif;
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