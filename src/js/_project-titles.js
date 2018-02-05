/*––––––––––––––––––––––––––––––
_PROJECT_TITLES.JS

Dynamically inserts project
titles in nav bar

––––––––––––––––––––––––––––––*/

// Namespace Declaration
// PT for ProjectTitles
var PT = {

	headerStructs: [],
	currentIndex: 0,
	currentScroll: 0,

	InitProjectHeader: function() {

		$('nav .home .project-title').text(PI.thisProject.name);
		$('nav .home .project-subtitle').text("");

	},

	GetHeaders: function () {

		var allHeaders = $('h2');
		for(i = 0; i < allHeaders.length; i++) {
			// console.log($(allHeaders[i]));
			var thisHeader = new PT.headerStruct();
			thisHeader.loc = $(allHeaders[i]).offset().top;
			thisHeader.text = $(allHeaders[i]).text();
			PT.headerStructs[i] = thisHeader;
		}
		// console.log(PT.headerStructs);

	},

	CheckPos: function(scrollTop) {

		// Bool - which way are we scrolling
		var scrollingDown;

		// Variable - new index
		var newIndex = PT.currentIndex;

		// Are we scrolling up or down?
		if(scrollTop > PT.currentScroll) {
			scrollingDown = true;
		} else {
			scrollingDown = false;
		}
		PT.currentScroll = scrollTop;

		// Special case: are we at the very top of the page?
		if(scrollTop === 0) {
			PT.InitProjectHeader();
		}

		// Special case: are we on the first frame?
		if(scrollTop > 0 && PT.currentIndex === 0) {
			PT.ChangeTitle(PT.headerStructs[0].text,"");
		}

		// Which h2s are we between?
		for(i = 0; i < PT.headerStructs.length; i++) {

			if(scrollTop > PT.headerStructs[i].loc && scrollTop < PT.headerStructs[i+1].loc) {

				newIndex = i;

				break;

			} else {

				continue;

			}

		}



		// if(scrollingDown === true) {

		// 	// What's the scrolltop of the next index?
		// 	if(scrollTop >= PT.headerStructs[PT.currentIndex + 1].loc) {

		// 		newIndex += 1;

		// 		console.log("HIT " + PT.headerStructs[PT.currentIndex].text);

		// 	}

		// } else { // we're scrolling up

		// 	if(scrollTop <= PT.headerStructs[PT.currentIndex].loc) {

		// 		newIndex -= 1;

		// 		console.log("HIT " + PT.headerStructs[PT.currentIndex].text);

		// 	}

		// }

		// console.log ("NEWINDEX @ " + scrollTop + " is " + newIndex);
		// console.log ("CURRENTINDEX @ " + scrollTop + " is " + newIndex);		

		if(newIndex !== PT.currentIndex) {
			PT.currentIndex = newIndex;
			PT.ChangeTitle(PT.headerStructs[0].text, PT.headerStructs[PT.currentIndex].text);
		}

	},


	ChangeTitle: function(title, subtitle) {

		$('nav .home .project-title').text(title);

		// These fading callbacks SORT of work...
		// $('nav .home .project-subtitle').fadeOut("slow",function(){
		// 		// console.log("FADED OUT");
		// 		$('nav .home .project-subtitle').text(subtitle).fadeIn("slow");
		// });

		$('nav .home .project-subtitle').text(subtitle);

	},

	headerStruct: function(loc,text) {
		this.loc = loc;
		this.text = text;
	}

};

// On Scroll
$(document).scroll(function(){

	// Only run this on pages that aren't the homepage
	if($('body').attr('id') !== 'p001') {
		PT.CheckPos($(document).scrollTop());
	}

});