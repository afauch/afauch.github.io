/*––––––––––––––––––––––––––––––
_TOP.JS

Revised version of _NAV-PROJECT.JS,
now setup to put a global nav
throughout the site.

––––––––––––––––––––––––––––––*/

// GO TO TOP
$('section:last-of-type header').ready(function() {

		$('section:last-of-type header .totop').fadeIn(400);

});

// $('section:last-of-type header').mouseleave(function() {

// 		$('section:last-of-type header .totop').fadeOut(400);

// });

$('section:last-of-type header').click(function() {

		$('body').animate({ scrollTop: 0 }, 600);

});