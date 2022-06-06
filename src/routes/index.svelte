<script>
	import Section from '../components/Section.svelte'
	import { client } from '../routes/index.js' 

	let icons;

	const preload = async () => {
		const query = "*[_type == 'icon-w-text']";
		icons = await client.fetch(query);
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

	<Section name={"Hvad er EMS?"} backgroundColor={"light"} showName={true}>
		<!--{JSON.stringify(EMSInfo[0])}-->

		<p>EMS står for Elektronisk Muskel-Stimulering, hvilket indebærer at elektroder stimulerer og aktiverer dine muskelgrupper. Dette gør det muligt at træne hele kroppen på samme tid og gennemføre en træningssession på bare 20 min. 1 EMS-træningssession på 20 min svarer til 90 min intensiv HIT træning, da elektroderne gør det muligt at øge intensiteten med op til 80%.</p>

		<p>Ønsker du at kickstarte et træningsforløb med EMS, og både mærke og se resultater af denne træning på din egen krop, så kontakt os og aftal en prøvetime for at se, om det er noget for dig.</p>
		
		<p><b>Hvorfor vælge EMS?</b></p>
		<ul>
			<li>Effektiv træning med øget intensitet</li>
			<li>Øger muskelmassen</li>
			<li>Øger fedtforbrændingen</li>
			<li>Mindsker cellulitis (appelsinhud)</li>
			<li>Forebygger og afhjælper skader</li>
			<li>Minimum belastning af muskler og led</li>
			<li>Tidsbesparing (kun 20 min træning)</li>
			<li>Personlig træning og skræddersyet program</li>
		</ul>
		
	</Section>

	{#await preload()}
	{:then}
		<Section name="" backgroundColor="dark" centerText={true}>
			<div class="row">
				{#each icons as icon}
					<div class="col text-center">
						<i class={`bi-${icon.bootstrap_icon_name}`} style="font-size: 6rem; color: lightseagreen" aria-label="icon"></i>
						<p><b>{icon.text}</b></p>
					</div>
				{/each}
			</div>
		</Section>
	{:catch error}
		<p>Der skete en fejl, prøv igen</p>
		<p>{error}</p>
	{/await}	


	<Section name={"Hvorfor vælge EMS by Styrk?"} backgroundColor={"light"} showName={true}>
		<!--{JSON.stringify(EMSInfo[0])}-->
		<p>Hos EMS by STYRK er klienten i fokus. Ved første konsultation vil dine ønsker og nuværende standpunkt blive gennemgået, så vi kan tilrettelægge træningen mod dine mål. For os skal træning være sjovt og ikke noget, der bare skal overstås. Kom godt i gang med et træningsforløb og mærk på din egen krop, hvordan EMS kan give glæde til træning og gode resultater på krop og sjæl.</p>
		
	</Section>
</div>
