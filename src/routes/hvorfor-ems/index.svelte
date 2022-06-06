<script>
	import BlockToText from "../../components/BlockToText.svelte";
	import Section from '../../components/Section.svelte'
	import { client } from '../../routes/index'
	


	let section;

	const preload = async () => {
		const query = "*[_id == 'a949f1f7-1a3b-4269-8893-53a8758b03c3']";
		section = await client.fetch(query);
	}
</script>

<sveltekit:head>
  <title>Hvorfor EMS by Styrk?</title>
</sveltekit:head>

<div>		
	{#await preload()}
		<p>Henter data</p>
	{:then}
		<div>
			<Section name={""} backgroundColor={"dark"} isLandingPage={true}>
				<span slot="section-outside-container">
					<div class="img-container">
						<h1 class="caption top-center">{section[0].name}</h1>
						<img src={section.sectionImage} class="img-fluid img-fade-in mb-4" alt="EMS træning">
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
		font-family: 'Callibri', Tahoma, Geneva, Verdana, sans-serif;
	}
	.img-container {
		width: 100%;
		display: inline-block;
		position: relative;
		text-align: center;
		color: rgb(255, 255, 255);
	}

    .top-center {
   		position: absolute;
		top: 5%;
		left: 60%;
		transform: translate(-90%, -50%);
}

</style>