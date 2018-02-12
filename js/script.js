
var hoveredItem;
var mouseOffsetX;
var mouseOffsetY;

var maxRot = 12; // max rotation factor
var threshold = 0.1;

var xDampCoeff = .7;
var yDampCoeff = .2;

var xLightOffsetConst = 0;
var yLightOffsetConst = -100;

$( document ).ready(function() {
    console.log( "ready!" );


	document.addEventListener('mousemove', function(ev){
			calculateHover(ev);
	});

	$('#projects a').hover(function() {

		resetHover(hoveredItem);
		hoveredItem = this;
		console.log(hoveredItem);

	});

});

function resetHover(item)
{
	var rotateString = 'rotate3d(0,0,0,0deg) scale(.9,.9)';
	$(item).css('transform',rotateString);
	return;
}

function calculateHover(ev) {

	// what are the 'center' coordinates of the hoveredItem?
	var itemCenterX = $(hoveredItem).offset().left + ($(hoveredItem).outerWidth()/2);
	var itemCenterY = $(hoveredItem).offset().top + ($(hoveredItem).outerHeight()/2);

	console.log(ev);

	// calculate the difference between the mouse X/Y position and the center of the item
	mouseOffsetX = itemCenterX - ev.pageX;
	mouseOffsetY = itemCenterY - ev.pageY;

	// FAUX LIGHTING 1 - BASE GRADIENT
	// var gradientCenterString = (-1*mouseOffsetX) + 'px ' + (-1*mouseOffsetY) + 'px'
	// $(hoveredItem).css('background-position',gradientCenterString);	

	// FAUX LIGHTING 2 - BASE GRADIENT
	var gradientCenterString = (mouseOffsetX * xDampCoeff + xLightOffsetConst) + 'px ' + (mouseOffsetY * yDampCoeff + yLightOffsetConst) + 'px'
	$(hoveredItem).find('.faux-light-dynamic').css('background-position',gradientCenterString);	

	// var gradientCenterString2 = (mouseOffsetX * .7) + 'px ' + ( mouseOffsetY * .7) + 'px'
	// $(hoveredItem).find('.faux-light-static').css('background-position',gradientCenterString2);	

	// normalize this to a -1 to 1 range
	mouseOffsetX = (mouseOffsetX / $(hoveredItem).outerWidth()) * 2;
	mouseOffsetY = (mouseOffsetY / $(hoveredItem).outerHeight()) * 2;

	// hysteresis
	if(mouseOffsetX < threshold && mouseOffsetX > (-1 * threshold))
	{
		mouseOffsetX = 0.0;
	}
	if(mouseOffsetY < threshold && mouseOffsetY > (-1 * threshold))
	{
		mouseOffsetY = 0.0;
	}

	// set the appropriate rotation strings

	console.log(mouseOffsetX + ' ' + mouseOffsetY);

	var rotateString = 'rotate3d(' + (mouseOffsetX * xDampCoeff) + ',' + (mouseOffsetY * yDampCoeff) + ',0,' + maxRot + 'deg) scale(1.0,1.0)';
	$(hoveredItem).css('transform',rotateString);


	// calculate the correct string to cause the rotation
	// var adjustedXRot = mouseOffsetY * maxRotX;
	// var adjustedYRot = mouseOffsetX * maxRotY;


	// var rotateXString = 'rotate3d(1,0,0,' + adjustedXRot + 'deg)';
	// var rotateYString = 'rotate3d(0,1,0,' + adjustedYRot + 'deg)';

	// apply the string to the element
	// $(hoveredItem).css('transform',rotateXString);	
	// $(hoveredItem).css('transform',rotateYString);

	// OK so different strategy
	// I now want to think about it as distance from diagonals
	// with (1,1) translating to ()

}