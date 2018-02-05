/*––––––––––––––––––––––––––––––
_PAGEFADE.JS

Lets page fade in after load

––––––––––––––––––––––––––––––*/

$(document).ready(function(){

	// Start this as soon as possible,
	// even before document.ready
	PI.InitProjects();

	PI.AssignThisPage();

	// Does this page require a password?	
	if(AUTH.IsPwdRequired()) {
		AUTH.RequirePwd();
	}


	FadeInPage().done(function(){

		// Instantiate ColorFade plugin
		// InitiateColorFade();
		// Instantiate Fullpage.js


		// IF THIS IS A PROJECT PAGE
		// AND IS MOBILE
		// TURN OFF FULLPAGE.JS
		var pageId = $('body').attr('id');
		// if(pageId != 'p001'){

		// 	console.log('This is a project page');
		// 	$('#fullpage').fullpage({

		// 	//"scrollBar: true" is required
		// 	//to play nice with
		// 	//InitiateColorFade
		// 	scrollBar: true,
		// 	responsive: 992

		// 	});

		// } else {

		// 	$('#fullpage').fullpage({

		// 	//"scrollBar: true" is required
		// 	//to play nice with
		// 	//InitiateColorFade
		// 	scrollBar: true,
		// 	responsive: 0

		// 	});
		// }

		// FULLPAGE TURNED OFF: RE-ENABLE BELOW

		// $('#fullpage').fullpage({

		// 	//"scrollBar: true" is required
		// 	//to play nice with
		// 	//InitiateColorFade
		// 	scrollBar: true,
		// 	responsive: 992

		// 	});
		
		// GetHeaders from _project-titles.js
		PT.GetHeaders();		

	});

});

function FadeInPage() {

	var deferred = $.Deferred();

	$('body').delay(300).fadeIn('slow', function(){
		deferred.resolve();		
	});

	return deferred.promise();

}