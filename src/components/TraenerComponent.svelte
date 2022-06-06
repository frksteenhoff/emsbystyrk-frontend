<script>

	export let 
		name, 
		image,
		intro = 'light',
		mainText = '';

</script>

<div class='container mb-4 img-fade-in'>
	<div class="row">
		<div class="col p-3 text-center img-fade-in intro">{intro}</div>
	</div>
	<div class="row">
		<div class="col p-4">
			<img src={image} class="img-fluid img-fade-in" alt="EMS træning">
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

<style>	p {
		line-height: 1.75;
	}
	
	div.intro, h2.intro {
		font-family: "Calibri Light", sans-serif;
		font-size: 30px;
		min-height: 350px;
	}

	h2.intro {
		min-height: 30px;
	}

	h2.intro.header {
		font-weight: 600;
		font-size: 40px;
	}

.img-fade-in {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
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