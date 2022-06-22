<script>
	import Section from './Section.svelte'
	import { client } from '../routes/index.js'
	import BlockToText from './BlockToText.svelte'

	
	let vilkaar;

	const preload = async () => {
		const query = "*[_type == 'vilkaar']";
		vilkaar= await client.fetch(query);
	}
</script>


{#await preload()}
	<div class="base-page"></div>
{:then}
	<Section name={vilkaar[0].name} showName={true}>
		<div class="container">
			<div class="row">
				<div class="col">
					<BlockToText block={vilkaar[0] ? vilkaar[0].terms : ''} />	
				</div>
			</div>
		</div>
	</Section>
{:catch error}
		<p>Der skete en fejl, prøv igen</p>
		<p>{error}</p>
{/await}