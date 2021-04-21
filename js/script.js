/***Toggle Menu***/
$(function () {
 $('.toggle-menu').click(function(){
	$('.exo-menu').toggleClass('display');
	$('.exo-2').toggleClass('display');
	
 });
 
});
/***Toggle Menu***/

/***Hide Show Hamburger/X***/
$(document).ready(function(){
    $(".toggle-menu").click(function(){
        $(".mainMobileMenuX").toggleClass("menuX");
    });
});


