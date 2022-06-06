<script>
	import Section from './Section.svelte'
	import { client } from '../routes/index.js'
	
	/*let forloeb;

	const preload = async () => {
		const query = "*[_type == 'forloeb']";
		forloeb = await client.fetch(query);
	}*/
</script>


<Section name="Generelle vilkår" showName={true}>
	<div class="container">
		<div class="row">
			<div class="col">
				<ul>
					<li>Afmelding skal ske <b>senest 4 timer før booket tid</b>. Ved akut sygdom ring eller send SMS.</li>
					<li>Ved forsinkelser på over 10 min. aflyses træningen, men tæller som brugt klip. </li>
					<li>EMS by Styrk frakender sig ethvert ansvar for skader sket i forbindelse med sygdomme, der ikke er blevet oplyst. </li>
					<li>Det er kundens eget ansvar at vaske og medbringe træningstøjet, der købes ved køb af første klippekort. Ved den gratis prøvetime lånes et sæt. </li>
					<li>Det er muligt at skifte tøj og benytte toilet, men der er ikke badefaciliteter til rådighed. </li>
				</ul>
			</div>
		</div>
	</div>
</Section>