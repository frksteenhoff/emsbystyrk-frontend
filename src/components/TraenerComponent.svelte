<script>

	export let 
		name, 
		image,
		intro = 'light',
		mainText = '';

</script>

<div class='container mb-4 img-fade-in'>
	<div class="row">
		<div class="col p-3 text-center img-fade-in intro" style="font-style: italic;">{intro}</div>
	</div>
	<div class="row">
		<div class="col pt-4 pl-4 pr-4">
			<img src={image} class="img-fluid img-fade-in basic" alt="EMS træning">
			<h2 class="intro header text-center pt-3">{name}</h2>
		</div>
	</div>
	<div class="row">
		<div class="col p-3">
			{#each mainText as text}
				<p>{text.children[0].text}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	@media only screen and (max-width: 976px) {
		div.intro, h2.intro {
			min-height: 50px;
			font-size: 25px;
			font-family: "Calibri Light", sans-serif;
		  }
		  
		  h2.intro.header {
			font-weight: 600;
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 977px) {
		p {
			line-height: 1.75;
		}
		
		div.intro, h2.intro {
			font-family: "Calibri Light", sans-serif;
			font-size: 25px;
			min-height: 220px;
		}

		h2.intro {
			min-height: 30px;
		}

		h2.intro.header {
			font-weight: 600;
			font-size: 40px;
		}
	}
</style>