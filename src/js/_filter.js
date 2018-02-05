/*––––––––––––––––––––––––––––––
_FILTER.JS

Filters projects based on
data settings

––––––––––––––––––––––––––––––*/

$('#projects ul.categories li').click(function() {

	////console.log - did it work
	//console.log("clicked!");
	//yes! move on

	// highlight the appropriate nav element
	$(this).addClass('selected').siblings().removeClass('selected');
	// (I'll have to create CSS styles for this)

	// create a variable to store the li data-filter attribute
	var categoryId = $(this).data('filter');

	// console log
	//console.log(categoryId);

	//create a variable to concatenate class name onto li data-filter
	var $boxId = $(".project-" + categoryId);

	// console log, to make sure we're selecting the correct element
	//console.log($boxId);
	//console.log($boxId.selector);
	
	// fadeOut, and do the rest of this as a callback function
	$('.project:visible').fadeOut(800,function() {

		//show the div with the correct class
		$boxId.fadeIn(800);
		//console.log("faded in");

	});

	//Save this one for later!
	//$('.project:visible').removeClass('highlighted');
	//$boxId.addClass('highlighted');

});
