/*––––––––––––––––––––––––––––––
_NAV.JS

Revised version of _NAV-PROJECT.JS,
now setup to put a global nav
throughout the site.

––––––––––––––––––––––––––––––*/


// This controls the appearing / disappearing of the nav bar

// For an "appear" after scroll effect:
// http://stackoverflow.com/questions/17136513/make-a-fixed-nav-bar-disappear-when-the-user-scrolls-down-and-reappear-upon-scro
$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {

        var pageId = $('body').attr('id');
        var foldBottom;
        var currentTop;
        switch(pageId) {
            case('p001'):
                foldBottom = $('#about').offset().top;
                currentTop = $(window).scrollTop();
                if (currentTop > foldBottom) {
                    $("nav").fadeIn();
                } else {
                    $("nav").fadeOut();
                }
                this.previousTop = currentTop;
                break;
            default:
                $("nav").fadeIn();          
                break;
        }
});

// DYNAMICALLY INSERT NAV

//the callback makes sure the html is loaded
//before trying to execute these functions
$('nav').load(baseUrl+'/nav.html',function(){

    var pageId = $('body').attr('id');
    console.log(pageId);

    // Set the correct a href attribute
    var homePath = ((pageId == 'p001') ? homePath='#intro' : homePath='../../');
    $('nav .home a').attr('href',homePath);

    // NAV BEHAVIORS GO HERE SO THEY BIND TO THE DOM
    // ONLY AFTER NAV IS LOADED

    // INIT PROJECT TITLE
    PT.InitProjectHeader();

    // SMOOTH SCROLL TO SECTION
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            console.log("smooth scroll function called");
            var target = $(this.hash);
            var navHeight = $('nav').innerHeight();
            target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - navHeight
                }, 1000);
                return false;
            }
        });
    });


    // FUNCTIONS FOR PROJECT PAGES
    if(pageId !== 'p001') {

        $(window).scroll(function(){

            $('nav').fadeIn('slow');

        });

        // EXPAND/COLLAPSE PROJECTS PANEL
        $(function(){
            $('a#expand-project-nav').click(function(){
                
                // TOGGLE SLIDE
                if($('.project-nav').is(':visible')) {
                    $('.project-nav').slideUp(DF.duration, DF.easing, function(){
                        // animation complete
                    });
                    $('.collapse-project-nav img').removeClass('open');                                       
                } else {
                    $('.project-nav').slideDown(DF.duration, DF.easing, function(){
                        // animation complete
                    });
                    $('.collapse-project-nav img').addClass('open');
                }

            });
        });

        // COLLAPSE PROJECTS PANEL
        $(function(){
            $('.collapse-project-nav img').click(function(){
                
                // TOGGLE SLIDE
                if($('.project-nav').is(':visible')) {
                   $('.project-nav').slideUp(DF.duration, DF.easing, function(){
                        // animation complete
                    });
                    $('.collapse-project-nav img').removeClass('open');                   
                } else {
                     // console.log('closed');
                }

            });
        });


    }

 });

