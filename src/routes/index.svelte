<script>
	import Section from '../components/Section.svelte'
	import BlockToText from '../components/BlockToText.svelte'
	import { client } from '../routes/index.js' 
	import { whyEMSObj, whatIsEMSObj } from '../stores.js'
	import hasValues from '../util/utils'

	let icons;

	const preload = async () => {
		const query = "*[_type == 'icon-w-text']";
		icons = await client.fetch(query);


		if(!hasValues($whyEMSObj)) {
			const whyEMSQuery = "*[_id == 'a949f1f7-1a3b-4269-8893-53a8758b03c3']";
			let whySection = await client.fetch(whyEMSQuery);
			
			// Add why ems section to store 
			whyEMSObj.set(whySection);
		}

		if(!hasValues($whatIsEMSObj)) {
			const whatIsEMSQuery = "*[_id == '0eef387a-f9d4-4561-b175-7a9161d09ada']";
			let whatSection = await client.fetch(whatIsEMSQuery);
			
			// Add what is ems section to store 
			whatIsEMSObj.set(whatSection);
		}
	}

</script>

<div>
	<sveltekit:head>
	<title>EMS by Styrk</title>
	</sveltekit:head>

	<Section name='EMS by Styrk' backgroundColor={"dark"} showName={false} centerText={true} isLandingPage={true}>
		<span slot="section-outside-container">
			<img src="img/nanna.jpg" class="img-fluid img-fade-in-3" alt="EMS træning">
		</span>
	</Section>

	{#await preload()}
		<div class="base-page"></div>
	{:then}
		<Section name="" backgroundColor={$whatIsEMSObj.colorDark ? 'dark' : 'light'} showName={false}>
			<BlockToText block={$whatIsEMSObj[0] ? $whatIsEMSObj[0].text : ''} />	
		</Section>
	
		<Section name="" backgroundColor="dark" centerText={true}>
			<div class="row">
				{#each icons as icon}
				<div class="col text-center">
					<i class={`bi-${icon.bootstrap_icon_name}`} style="font-size: 6rem; color: var(--accent-color);" aria-label="icon"></i>
					<p><b>{icon.text}</b></p>
				</div>
				{/each}
			</div>
		</Section>
		
		<Section name={$whyEMSObj[0].name} backgroundColor={$whyEMSObj.colorDark ? 'dark' : 'light'} showName={true}>
			<BlockToText block={$whyEMSObj[0] ? $whyEMSObj[0].text : ''} />
		</Section>
	{:catch error}
		<p>Der skete en fejl, prøv igen</p>
		<p>{error}</p>
	{/await}	

</div>
