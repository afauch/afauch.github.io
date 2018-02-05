/*––––––––––––––––––––––––––––––
_EXPAND.JS

Expands #all-projects on click

––––––––––––––––––––––––––––––*/

var showingAllProjects = false;

$(function() {
	$('#expand').click(function() {
		// console.log("CALLED");

		var expandText = $('#expand a span').data('expand');
		console.log(expandText);
		var collapseText = $('#expand a span').data('collapse');
		console.log(collapseText);

		$('#all-projects').slideToggle("slow");
		showingAllProjects = !showingAllProjects;

		if (showingAllProjects === false){

			$('#expand span').html(expandText);
			$('#expand img').removeClass('face-up').addClass('face-down');

		} else {

			$('#expand span').html(collapseText);
			$('#expand img').removeClass('face-down').addClass('face-up');

		}

	});
});