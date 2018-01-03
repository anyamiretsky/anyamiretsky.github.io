$(document).ready(function () {

	var lights = 'on';
	$('#lightswitch').click(function(){
		if(lights=='on'){

			// $('#lightswitch').css('background','white');
			// $('#lightswitch').css('color','black');
			// $('#lightswitch').addClass('switch-on');
			// $('#lightswitch').removeClass('switch-off');

			$('#lightswitch').toggleClass('switch-on');

			$('body').css('background','black');
			
			lights='off';
			$('#lightswitch').html('ON')
			
		}
		else{
			// $('#lightswitch').css('background','black');
			// $('#lightswitch').css('color','white');
			// $('#lightswitch').css({'background':'black','color':'white'});
			// $('#lightswitch').addClass('switch-off');
			// $('#lightswitch').removeClass('switch-on');
			

			$('#lightswitch').toggleClass('switch-on');

			$('body').css('background','white');
			
			lights='on';
			$('#lightswitch').html('OFF')
		}
	})
		




})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;