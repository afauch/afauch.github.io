/*––––––––––––––––––––––––––––––
_FILTER.JS

Filters projects based on
data settings

––––––––––––––––––––––––––––––*/

$('#projects ul.categories li').click(function() {

	//console.log - did it work
	console.log("clicked!");
	//yes! move on

	// highlight the appropriate nav element
	$(this).addClass('selected').siblings().removeClass('selected');
	// (I'll have to create CSS styles for this)

	// create a variable to store the li data-filter attribute
	var categoryId = $(this).data('filter');

	// console log
	console.log(categoryId);

	//create a variable to concatenate class name onto li data-filter
	var $boxId = $(".project-" + categoryId);

	// console log, to make sure we're selecting the correct element
	console.log($boxId);
	console.log($boxId.selector);
	
	// fadeOut, and do the rest of this as a callback function
	$('.project:visible').fadeOut("slow",function() {

		//show the div with the correct class
		$boxId.fadeIn("slow");
		console.log("faded in");

	});
	
	//Save this one for later!
	//$('.project:visible').removeClass('highlighted');
	//$boxId.addClass('highlighted');

});


// /*––––––––––––––––––––––––––––––
// _FILTER2.JS

// Attempt to fix filter fading

// ––––––––––––––––––––––––––––––*/

// $('#projects ul.categories li').click(function() {

// 	//console.log - did it work
// 	console.log("clicked!");
// 	//yes! move on

// 	// highlight the appropriate nav element
// 	$(this).addClass('selected').siblings().removeClass('selected');
// 	// (I'll have to create CSS styles for this)

// 	// create a variable to store the li data-filter attribute
// 	var categoryId = $(this).data('filter');

// 	// console log
// 	console.log(categoryId);

// 	//create a variable to concatenate class name onto li data-filter
// 	var $boxId = $(".project-" + categoryId);

// 	// console log, to make sure we're selecting the correct element
// 	console.log($boxId);
// 	console.log($boxId.selector);
	
// 	// fadeOut, and do the rest of this as a callback function
// 	$('.project:visible').fadeOut("slow",function() {

// 		//show the div with the correct class
// 		$boxId.fadeIn("slow");
// 		console.log("faded in");

// 	});
	
// 	//Save this one for later!
// 	//$('.project:visible').removeClass('highlighted');
// 	//$boxId.addClass('highlighted');

// });


/*––––––––––––––––––––––––––––––
_FOOTER.JS

Dynamically insert the footer

––––––––––––––––––––––––––––––*/

// DYNAMICALLY INSERT NAV
// Fix this to include an if/then statement that
// selects the right directory structure depending
// if the page has a .project-page class

$(document).ready(function() {

	$('footer').load('../_footer.html');
	$('footer').load('../../_footer.html');

});

/*––––––––––––––––––––––––––––––
_NAV-PROJECT.JS

Show/hide the nav menu when
clicking line art

––––––––––––––––––––––––––––––*/

// DYNAMICALLY INSERT NAV

//the callback makes sure the html is loaded
//before trying to execute these functions
$('.project-page nav').load('../../_nav-project.html',function(){

		// SHOW/HIDE NAV

		$('#intro header h1, #intro img.line-art').click(function() {

			$('nav').slideToggle('slow');

		});

	});

/*––––––––––––––––––––––––––––––
_NAV.JS

Show/hide the nav menu when
clicking my name

––––––––––––––––––––––––––––––*/

// DYNAMICALLY INSERT NAV

//the callback makes sure the html is loaded
//before trying to execute these functions
$('#p001 nav, #p002 nav').load('_nav.html', function(){
	//$('.project-page nav').load('../../_nav-project.html');

// ANIMATE NAVIGATION

	$('nav ul li a').click(function() {

		//log it
		console.log('clicked');

		//change the class of the a
		$(this).addClass('active');
		//remove the class of the other a's
		$(this).parent().siblings().find('a').removeClass('active');

		//create a variable to collect the data number
		var navIdNum = $(this).data("nav-id");

		//console log
		console.log(navIdNum);

		//create a variable that stores the DOM element,
		//with an ID concatenated from the data type

		var $navContentSection = $(".content-" + navIdNum);

		//console log
		console.log($navContentSection);

		//now, scroll the body
		$('body').animate({

			scrollTop: $navContentSection.offset().top

		});

		//hide the nav
		$('nav').hide('slow');

	});


	// SHOW/HIDE NAV

	$('#intro header h1, #intro img.line-art').click(function() {

		$('nav').slideToggle('slow');

	});

});


/*––––––––––––––––––––––––––––––
_PROJECT-LINK.JS

Dynamically link from projects
to project pages.

––––––––––––––––––––––––––––––*/

// $('#p001 #projects ul li.project').click(function(){

// 	// did the click work?
// 	console.log("CLICKED");

// 	// create a var to hold the projectName
// 	var projectName = $(this).data('name');

// 	// log the projectName, just to be sure
// 	console.log(projectName);

// 	// assemble a url with the projectName
// 	var projectUrl = window.location + "projects/" + projectName + "/";

// 	// go to that URL
// 	window.location.href = projectUrl;

// });


$('#p001 #projects ul li.project').click(function(){

	// did the click work?
	console.log("CLICKED");

	// create a var to hold the projectName
	var projectName = $(this).data('name');

	// log the projectName, just to be sure
	console.log(projectName);

	// assemble a url with the projectName
	var projectUrl = "http://afaucher.me/projects/" + projectName + "/";

	// go to that URL
	window.location.href = projectUrl;

});