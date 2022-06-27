$(document).ready(menu);

function menu() {
  $('#menu-icon-shape').on('click', function() {
    $('#menu-icon-shape').toggleClass('active');
    $('#top, #middle, #bottom').toggleClass('active');
    $('#overlay-nav').toggleClass('active');
  });
}


	
/**Fonts Template**/
$("#FontTypeka").click(function() {
    $("body").addClass( "FontTypeka" );
    $("body").removeClass("FontSketchnoteSquare FontChauncyPro FontShlop");
});



$("#FontSketchnoteSquare").click(function() {
    $("body").addClass( "FontSketchnoteSquare" );
	$("body").removeClass("FontTypeka FontChauncyPro FontShlop");
});


$("#FontChauncyPro").click(function() {
    $("body").addClass( "FontChauncyPro" );
	$("body").removeClass("FontTypeka FontSketchnoteSquare FontShlop");
});


$("#FontShlop").click(function() {
    $("body").addClass( "FontShlop" );
	$("body").removeClass("FontTypeka FontSketchnoteSquare FontChauncyPro");
});
/**Fonts Template**/



/**Colors Template**/
$("#ColorsPinkAndBlack").click(function() {
    $("body").addClass( "ColorsPinkAndBlackBackground" );
	$("#nav-content").addClass( "ColorsPinkAndBlackColor" );
	$(".p1, .p2").addClass( "ColorsPinkAndBlackStrokeColor" );
	
    $("body").removeClass("ColorsBrownAndBlackBackground ColorsYellowAndBlackBackground");
	$("#nav-content").removeClass( "ColorsBrownAndBlackColor ColorsYellowAndBlackColor" );
	$(".p1, .p2").removeClass( "ColorsBrownAndBlackStrokeColor ColorsYellowAndBlackStrokeColor" );
});



$("#ColorsBrownAndBlack").click(function() {
    $("body").addClass( "ColorsBrownAndBlackBackground" );
	$("#nav-content").addClass( "ColorsBrownAndBlackColor" );
	$(".p1, .p2").addClass( "ColorsBrownAndBlackStrokeColor" );
	
    $("body").removeClass("ColorsPinkAndBlackBackground ColorsYellowAndBlackBackground");
	$("#nav-content").removeClass( "ColorsPinkAndBlackColor ColorsYellowAndBlackColor" );
	$(".p1, .p2").removeClass( "ColorsPinkAndBlackStrokeColor ColorsYellowAndBlackStrokeColor" );
});


$("#ColorsYellowAndBlack").click(function() {
    $("body").addClass( "ColorsYellowAndBlackBackground" );
	$("#nav-content").addClass( "ColorsYellowAndBlackColor" );
	$(".p1, .p2").addClass( "ColorsYellowAndBlackStrokeColor" );
	
    $("body").removeClass("ColorsPinkAndBlackBackground ColorsBrownAndBlackBackground");
	$("#nav-content").removeClass( "ColorsPinkAndBlackColor ColorsBrownAndBlackColor" );
	$(".p1, .p2").removeClass( "ColorsPinkAndBlackStrokeColor ColorsBrownAndBlackColor" );
});


/**Colors Template**/


/**Active Button :: Font**/
const callToActionBtns = document.querySelectorAll(".CTA__font");

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach(f => f.classList.remove('activeFont'));
    e.target.classList.toggle("activeFont");
  });
});
/**Active Button :: Font**/


/**Active Button :: Colors**/
const callToActionBtn = document.querySelectorAll(".CTA__colors");

callToActionBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtn.forEach(f => f.classList.remove('activeColors'));
    e.target.classList.toggle("activeColors");
  });
});
/**Active Button :: Colors**/




