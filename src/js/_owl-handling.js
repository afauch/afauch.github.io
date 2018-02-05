/*––––––––––––––––––––––––––––––
_OWL-HANDLING.JS

Dynamically affects Owl
carousel rendering
––––––––––––––––––––––––––––––*/

//console.log('owl working');

//Get width

$(window).resize(function(){

	var tempWindowSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	console.log(tempWindowSize);
	TestCarousel(tempWindowSize);

});

function TestCarousel(windowSize) {

	//If width is below 992, then initiate carousel
	if(windowSize < 992){

		//owl-carousel owl-theme
		console.log('below 992');
		$('.project-carousel').owlCarousel({

			items: 4,
		  	autoHeight: false

		});
	} else {

		$('.project.carousel').owlCarousel({

			
			
		});
		console.log('not below 992');
		return;
	}

}