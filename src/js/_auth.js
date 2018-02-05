/*––––––––––––––––––––––––––––––
_AUTH.JS

Light password protection on
specified pages

––––––––––––––––––––––––––––––*/

// Namespace
var AUTH = {

	pwdString: 'testpwd',

	IsPwdRequired: function() {

		// Is this the index page?
		if(PI.thisPageId === 'p001') {

			return false;

		} else {

			return PI.projectsById[PI.thisPageId].pwd;

		}

	},

	RequirePwd: function() {

		console.log('RequirePwd called');

		// Is there a cookie indicating authoriziation?

		var authCookie = AUTH.ReadCookie('auth');
		console.log('cookie as read is: auth=', authCookie);

		if(authCookie !== 'true') {

			console.log('password required');

			var authHtml;

			$.get( baseUrl+'/auth.html', function( data ) {
			  	
			  	// Get the HTML auth data
				authHtml = data;
				$('body').append(authHtml);

				// block the standard submit
				// which refreshes the page
				// call the CheckPwd() function instead
				$("#pwdForm").submit(function(e) {
				    e.preventDefault();
				    AUTH.CheckPwd();
				});

			});
		} else {

			console.log('already authorized, no password protection required');

		}


	},

	CheckPwd: function() {

		var inputPwd = $('#pwd').val();
		console.log(inputPwd);

		if(inputPwd == AUTH.pwdString){
			
			$('#auth').fadeOut();

			// create cookie to remember this user
			// already entered the password
			AUTH.CreateCookie('auth',true,0);

		} else {
			$('#wrong').fadeIn();
			$();
		}

	},

	CreateCookie: function(name,value,days) {

		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = name+"="+value+expires+"; path=/";

	}, 

	ReadCookie: function(name) {

		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
		}
		return null;

	}, 


	EraseCookie: function(name) {
		AUTH.CreateCookie(name,"",-1);
	}

};


// This will run through and see if the current page is protected
// function RequirePwd() {

// 	// Is there a cookie indicating authoriziation?

// 	var authCookie = ReadCookie('auth');
// 	console.log('cookie as read is: auth=', authCookie);

// 	if(authCookie !== 'true') {

// 		console.log('password required');

// 		var authHtml;

// 		$.get( baseUrl+'/auth.html', function( data ) {
		  	
// 		  	// Get the HTML auth data
// 			authHtml = data;
// 			$('body').append(authHtml);

// 			// block the standard submit
// 			// which refreshes the page
// 			// call the CheckPwd() function instead
// 			$("#pwdForm").submit(function(e) {
// 			    e.preventDefault();
// 			    CheckPwd();
// 			});

// 		});
// 	} else {

// 		console.log('already authorized, no password protection required');

// 	}
// }


// function CheckPwd() {

// 	var inputPwd = $('#pwd').val();
// 	console.log(inputPwd);

// 	if(inputPwd == pwdString){
		
// 		$('#auth').fadeOut();

// 		// create cookie to remember this user
// 		// already entered the password
// 		CreateCookie('auth',true,0);

// 	} else {
// 		$('#wrong').fadeIn();
// 		$();
// 	}

// }

// function CreateCookie(name,value,days) {
// 	var expires;
// 	if (days) {
// 		var date = new Date();
// 		date.setTime(date.getTime()+(days*24*60*60*1000));
// 		expires = "; expires="+date.toGMTString();
// 	} else {
// 		expires = "";
// 	}
// 	document.cookie = name+"="+value+expires+"; path=/";
// }

// function ReadCookie(name) {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0;i < ca.length;i++) {
// 		var c = ca[i];
// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
// 		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
// 	}
// 	return null;
// }

// function EraseCookie(name) {
// 	CreateCookie(name,"",-1);
// }
