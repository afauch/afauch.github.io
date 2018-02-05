$( document ).ready(function() {
    console.log( "ready!" );

	$('.prenav').click(function() {

		$('#nav-icon').toggleClass('open');
		$('.menu').fadeToggle();

	});

});
