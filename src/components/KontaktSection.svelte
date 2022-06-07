<script>
	import Section from './Section.svelte'
</script> 

<Section name="Kontakt" backgroundColor="light" showName={true}>
	<div class="container">
		<div class="row">
			<div class="col">
				Hvis vi bare tilføjer den samme information her, som der allerede er i "footeren" (helt i bunden af siden), så er det bare duplikering af indhold. Vil vi gerne det?
				Kan vi tilføje noget mere? (Udover et billede)
			</div>
			<div class="col-1"></div>
			<div class="col col-xs-12 col-md-4 p-3 hours-text rounded" style="background-color: var(--accent-color)">
				<p><strong>Åbningtider</strong></p>
				<div class="row">
					<div class="col">
						<p>Mandag-Torsdag</p>
					</div>
					<div class="col-auto">
						14.00-21.00
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p>Lørdag</p>
					</div>
					<div class="col-auto">
						10.00-17.00
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p>Søndag</p>
					</div>
					<div class="col-auto">
						10.00-15.00
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>

<style>
	.hours-text {
		color: var(--primary-text-color);
	}
</style>