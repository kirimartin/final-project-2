$(document).ready(function(){
	console.log('it works');
	
// click on a hotspot and text appears
// click again to minimize text

	$('.tooltip-1').tooltipster({
		position:'right',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-2').tooltipster({
		position:'left',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-3').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-4').tooltipster({
		position:'left',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-5').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip-6').tooltipster({
		position:'top',
		trigger:'click',
		animation:'grow'
	})



});


// hotspots appear when you scroll over the camera

// selected hotspot stays visible, others dispear

