/*
This file contains JS for:
Header
*/

var scrollThreshold = $("header").outerHeight();
$(window).scroll(function(event) {

    if($(window).width() > 670) { //Only apply header js if using the position: fixed header
        var alpha = 1 - (0.2 * (Math.min($(window).scrollTop(), scrollThreshold) / scrollThreshold)); //For slow-ish fade-in fuckery - fades alpha from 1 to 0.8
        $("header").css({ backgroundColor: "rgba(0, 0, 0, " + alpha + ")"});
    } else {
        $("header").css({ backgroundColor: "rgba(0, 0, 0, 1)"});
    }
});

//Fixes header distancing
var headerHeight = $(window).width() > 670 ? $("header").outerHeight() : 0; //Only apply padding if using the position: fixed header

$("#dividerimgdiv").css("padding-top", headerHeight);
$(window).resize(function() {
    headerHeight = $(window).width() > 670 ? $("header").outerHeight() : 0; 
    $("#dividerimgdiv").css("padding-top", headerHeight);
});