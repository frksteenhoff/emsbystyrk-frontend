<script>
	import ForloebSection from "../../components/ForloebSection..svelte";
	import VilkaarSection from "../../components/VilkaarSection.svelte";
</script>

<sveltekit:head>
  <title>Priser og vilkår</title>
</sveltekit:head>

<div>
	<ForloebSection></ForloebSection>
	<hr>
	<VilkaarSection></VilkaarSection>
</div>

<style>
	hr {
		margin: 50px;
		color: var(--accent-color);
		border-width: 5px;
	}
</style>