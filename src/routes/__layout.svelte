<script>
	import BlockToText from '../components/BlockToText.svelte'
	import { client } from '../routes/index.js' 

	let footer;

	const preload = async () => {
		const query = "*[_id == '0c6e8e27-dfd8-4101-bba1-bd8d40b09075']";
		footer = await client.fetch(query);
	}

</script>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
	<div class="container-fluid">
		<a class="navbar-brand" href="/"><img src="img/logo_no_background.png" style="width: 40px;"/> EMS by Styrk</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
	  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
		  <a class="nav-link" href="/hvad-er-ems">Hvad er EMS?</a>
		  <a class="nav-link" href="/hvorfor-ems">Hvorfor EMS?</a>
		  <a class="nav-link" href="/dine-traenere">Dine trænere</a>
		  <a class="nav-link" href="/priser">Priser og vilkår</a>
		  <a class="nav-link" href="/kontakt">Kontakt</a>
		</div>
	  </div>
	</div>
</nav>

<div class="load-page">
	<slot></slot>
</div>

{#await preload()}
	{:then}
	<footer class="p-3" style="color: white; background-color: var(--bs-body-color); min-height: 60px;">
		<BlockToText block={footer[0] ? footer[0].body : ''}  showInContainer={false} />
	</footer>
	{:catch error}
		<p>{error}</p>
{/await}

<style>
	body {
		font-family: Calibri;
	}
	.load-page {
		min-height: 1000px
	}	
  </style>