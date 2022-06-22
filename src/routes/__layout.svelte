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
		<a class="navbar-brand" href="/"><img src="img/logo_no_background.png" style="width: 40px;" alt="EMS logo" /> EMS by Styrk</a>
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
	<div class="base-page"></div>
{:then}
	<footer class="p-3 footer">
		<div class="row">
			<div class="col">
				<BlockToText block={footer[0] ? footer[0].body : ''}  showInContainer={false} />
			</div>
			<div class="col-auto p-5">
				<img src="img/logo_no_background.png" style="width: 90px;" alt="EMS logo" />
			</div>
		</div>
	</footer>
	{:catch error}
		<p>{error}</p>
{/await}

<!-- ONLY GLOBAL STYLING HERE -->
<svelte:head>
	<style>
		img.basic:hover {
			opacity: 0.9;
		}
		.base-page {
			min-height: 800px;
		}
		.img-fade-in {
			animation: fadeIn 2s;
			-webkit-animation: fadeIn 2s;
			-moz-animation: fadeIn 2s;
			-o-animation: fadeIn 2s;
			-ms-animation: fadeIn 2s;
		}
		.img-fade-in-3 {
			animation: fadeIn 3s;
			-webkit-animation: fadeIn 3s;
			-moz-animation: fadeIn 3s;
			-o-animation: fadeIn 3s;
			-ms-animation: fadeIn 3s;
		}

		@keyframes fadeIn {
			0% {opacity:0;}
			100% {opacity:1;}
		}
		
		@-moz-keyframes fadeIn {
			0% {opacity:0;}
			100% {opacity:1;}
		}
		
		@-webkit-keyframes fadeIn {
			0% {opacity:0;}
			100% {opacity:1;}
		}
		
		@-o-keyframes fadeIn {
			0% {opacity:0;}
			100% {opacity:1;}
		}
		
		@-ms-keyframes fadeIn {
			0% {opacity:0;}
			100% {opacity:1;}
		}
	</style>
</svelte:head>
<style>
	body {
		font-family: Calibri;
	}
	.load-page {
		min-height: 1000px
	}	

	.footer {
		color: var(--primary-text-color); 
		background-color: var(--accent-color); 
		min-height: 60px;
		font-size: 0.9em;
	}
  </style>