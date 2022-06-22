<script>
	import BlockToText from "../../components/BlockToText.svelte";
	import Section from '../../components/Section.svelte'
	import { client } from '../../routes/index'
	import buildSanityImageUrl from '../../util/imageUtils'

	let section, imageUrl;

	const preload = async () => {
		const query = "*[_id == 'a949f1f7-1a3b-4269-8893-53a8758b03c3']";
		section = await client.fetch(query);

		const imageRef = section[0].sectionImage.asset._ref;
		imageUrl = buildSanityImageUrl(imageRef);	
	}
</script>

<sveltekit:head>
  <title>Hvorfor EMS by Styrk?</title>
</sveltekit:head>

<div>		
	{#await preload()}
		<div class="base-page"></div>
	{:then}
		<div>
			<Section name={""} backgroundColor={"dark"} isLandingPage={true}>
				<span slot="section-outside-container">
					<div class="img-container">
						<h1 class="header-shadow caption top-center img-fade-in">{section[0].name}</h1>
						<img src={imageUrl} class="img-fluid pb-4" alt="EMS træning">
					</div>
				</span>
			</Section>
			

			<Section name="" backgroundColor={"dark"} showName={false}>
				<BlockToText block={section[0] ? section[0].text : ''} />
			</Section>
		</div>
		{:catch error}
			<p>Der skete en fejl, prøv igen</p>
			<p>{error}</p>
	{/await}
</div>

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