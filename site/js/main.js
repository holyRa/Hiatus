/*
This file contains JS for:
Header
*/

if($(window).width > 670) { //Only apply header js if we're using the position: fixed header
    var scrollThreshold = $("header").outerHeight();
    $(window).scroll(function(event) {
        var alpha = 1 - (0.2 * (Math.min($(window).scrollTop(), scrollThreshold) / scrollThreshold)); //For slow-ish fade-in fuckery - fades alpha from 1 to 0.8
        $("header").css({ backgroundColor: "rgba(0, 0, 0, " + alpha + ")"});
    });

    //Fixes header distancing
    var headerHeight = $("header").outerHeight();

    $("#dividerimgdiv").css("padding-top", headerHeight);
    $(window).resize(function() {
        headerHeight = $("header").outerHeight();
        $("#dividerimgdiv").css("padding-top", headerHeight);
    });
}
