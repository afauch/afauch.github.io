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


/*––––––––––––––––––––––––––––––
_FOOTER.JS

Dynamically insert the footer

––––––––––––––––––––––––––––––*/

// DYNAMICALLY INSERT NAV
// Fix this to include an if/then statement that
// selects the right directory structure depending
// if the page has a .project-page class

$(document).ready(function() {

	$('footer').load(baseUrl+'/footer.html');

});

/*––––––––––––––––––––––––––––––
_GLOBAL.JS

Set global variables and
functions for session

––––––––––––––––––––––––––––––*/

//Set global baseUrl variable depending on domain
//var baseUrl = 'http://asf-p-a.pancakeapps.com';
var baseUrl = window.location.protocol + "//" + window.location.host;

// goToUrl
// Assemble URL
// Fade out body
// Change page location!
function goToUrl (sessionBaseUrl, extensionPath) {

	var compiledUrl = sessionBaseUrl + extensionPath;
	console.log(compiledUrl);
	$('body').fadeOut('slow');
	// go to that URL
	window.location.href = compiledUrl;

}

/*!
 * windows: a handy, loosely-coupled jQuery plugin for full-screen scrolling windows.
 * Version: 0.0.1
 * Original author: @nick-jonas
 * Website: http://www.workofjonas.com
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {


var that = this,
        pluginName = 'windows',
        defaults = {
            snapping: true,
            snapSpeed: 500,
            snapInterval: 1100,
            onScroll: function(){},
            onSnapComplete: function(){},
            onWindowEnter: function(){}
        },
        options = {},
        $w = $(window),
        s = 0, // scroll amount
        t = null, // timeout
        $windows = [];

    /**
     * Constructor
     * @param {jQuery Object} element       main jQuery object
     * @param {Object} customOptions        options to override defaults
     */
    function windows( element, customOptions ) {

        this.element = element;
        options = options = $.extend( {}, defaults, customOptions) ;
        this._defaults = defaults;
        this._name = pluginName;
        $windows.push(element);
        var isOnScreen = $(element).isOnScreen();
        $(element).data('onScreen', isOnScreen);
        if(isOnScreen) options.onWindowEnter($(element));

    }

    /**
     * Get ratio of element's visibility on screen
     * @return {Number} ratio 0-1
     */
    $.fn.ratioVisible = function(){
        var s = $w.scrollTop();
        if(!this.isOnScreen()) return 0;
        var curPos = this.offset();
        var curTop = curPos.top - s;
        var screenHeight = $w.height();
        var ratio = (curTop + screenHeight) / screenHeight;
        if(ratio > 1) ratio = 1 - (ratio - 1);
        return ratio;
    };

    /**
     * Is section currently on screen?
     * @return {Boolean}
     */
    $.fn.isOnScreen = function(){
        var s = $w.scrollTop(),
            screenHeight = $w.height(),
            curPos = this.offset(),
            curTop = curPos.top - s;
        return (curTop >= screenHeight || curTop <= -screenHeight) ? false : true;
    };

    /**
     * Get section that is mostly visible on screen
     * @return {jQuery el}
     */
    var _getCurrentWindow = $.fn.getCurrentWindow = function(){
        var maxPerc = 0,
            maxElem = $windows[0];
        $.each($windows, function(i){
            var perc = $(this).ratioVisible();
            if(Math.abs(perc) > Math.abs(maxPerc)){
                maxElem = $(this);
                maxPerc = perc;
            }
        });
        return $(maxElem);
    };


    // PRIVATE API ----------------------------------------------------------

    /**
     * Window scroll event handler
     * @return null
     */
    var _onScroll = function(){
        s = $w.scrollTop();

        _snapWindow();

        options.onScroll(s);

        // notify on new window entering
        $.each($windows, function(i){
            var $this = $(this),
                isOnScreen = $this.isOnScreen();
            if(isOnScreen){
                if(!$this.data('onScreen')) options.onWindowEnter($this);
            }
            $this.data('onScreen', isOnScreen);
        });
    };

    var _onResize = function(){
        _snapWindow();
    };

    var _snapWindow = function(){
        // clear timeout if exists
        if(t){clearTimeout(t);}
        // check for when user has stopped scrolling, & do stuff
        if(options.snapping){
            t = setTimeout(function(){
                var $visibleWindow = _getCurrentWindow(), // visible window
                    scrollTo = $visibleWindow.offset().top, // top of visible window
                    completeCalled = false;
                // animate to top of visible window
                $('html:not(:animated),body:not(:animated)').animate({scrollTop: scrollTo }, options.snapSpeed, function(){
                    if(!completeCalled){
                        if(t){clearTimeout(t);}
                        t = null;
                        completeCalled = true;
                        options.onSnapComplete($visibleWindow);
                    }
                });
            }, options.snapInterval);
        }
    };


    /**
     * A really lightweight plugin wrapper around the constructor,
        preventing against multiple instantiations
     * @param  {Object} options
     * @return {jQuery Object}
     */
    $.fn[pluginName] = function ( options ) {

        $w.scroll(_onScroll);
        $w.resize(_onResize);

        return this.each(function(i) {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new windows( this, options ));
            }
        });
    };

})( jQuery, window, document );

/*––––––––––––––––––––––––––––––
_NAV.JS

Revised version of _NAV-PROJECT.JS,
now setup to put a global nav
throughout the site.

––––––––––––––––––––––––––––––*/

// DYNAMICALLY INSERT NAV

//the callback makes sure the html is loaded
//before trying to execute these functions
$('nav').load(baseUrl+'/nav.html',function(){

		// SHOW/HIDE NAV

		// $('#intro header h1, #intro img.line-art').click(function() {

		// 	$('nav').slideToggle('slow');

		// });

		// EXPERIMENTAL SHOW/HIDE NAV
		$('#intro header').click(function() {

			$('nav').slideToggle('slow');

		});

		// SHOW/HIDE PROJECT SUBNAV
		$('nav li#project-toggle').click(function() {

			$('ul.project-nav').slideToggle('slow');

		});

		$('nav ul li').click(function(){
			console.log("CLICKED");
			var linkName = $(this).data('name');
			console.log(linkName);

			switch(linkName) {
				case 'home':
					console.log("Go Home!");
					goToUrl(baseUrl, '/index.html');
					break;
				case 'about':
					console.log("Go to About!");
					goToUrl(baseUrl, '/about.html');
					break;
				case 'projects':
					console.log("Don't do anything!");
					break;
				default:
					console.log("Must be a project!");
					goToUrl(baseUrl, '/projects/'+linkName+'/');
			}

		});

	});

/*––––––––––––––––––––––––––––––
_PAGEFADE.JS

Lets page fade in after load

––––––––––––––––––––––––––––––*/

$(document).ready(function(){

	$('body').delay(300).fadeIn('slow');

});

/*––––––––––––––––––––––––––––––
_PROJECT-LINK.JS

Dynamically link from projects
to project pages.

––––––––––––––––––––––––––––––*/

$('#p001 #projects ul li.project').click(function(){

	// did the click work?
	console.log("CLICKED");

	// create a var to hold the projectName
	var projectName = $(this).data('name');

	// log the projectName, just to be sure
	console.log(projectName);

	// call the 'goToUrl' function
	goToUrl(baseUrl,'/projects/'+projectName+'/');

	// assemble a url with the projectName
	//var projectUrl = "http://asf-p-a.pancakeapps.com/projects/" + projectName + "/";

	// go to that URL
	//window.location.href = projectUrl;

});

//snapping test

$(document).ready(function(){

    $('section').windows({
        snapping: true,
        snapSpeed: 600,
        snapInterval: 700,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    });

});