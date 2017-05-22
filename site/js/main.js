/*
This file contains JS for:
Header

*/

var scrollThreshold = $("header").outerHeight();
$(window).scroll(function(event) {
    var alpha = 1 - (0.2 * (Math.min($(window).scrollTop(), scrollThreshold) / scrollThreshold)); //For slow-ish fade-in fuckery - fades alpha from 1 to 0.8
    $("header").css({ backgroundColor: "rgba(0, 0, 0, " + alpha + ")"});
});