$(document).ready(function(){
	console.log('it works');
	
	$('.tooltip-1').tooltipster();

	$('.tooltip-1').tooltipster({
		position:'right',
		trigger:'click',
		animation:'grow'
	})

	$('.tooltip').tooltipster();

	$('.tooltip').tooltipster({
		position:'right',
		trigger:'click',
		animation:'grow'
	})
	// why doesnt this work?


});




