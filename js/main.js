$(document).ready(function(){
	console.log('it works');

	//when i click on a hotspot the cooresponding text box appears
	//when i click on the hotspot again text box disapears

	var $button = $('.button');
	var $textbox = $('.text-box');

	$button.on('click', function(){
		$textbox.slideToggle( 300 );
	});




//make all hotspots appear when you hover over the photo
//when 1 hotspot is clicked all others disapear



	});
