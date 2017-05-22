var headerHeight = $("header").outerHeight();

$("#dividerimgdiv").css("padding-top", headerHeight);
$(window).resize(function() {
    headerHeight = $("header").outerHeight();
    $("#dividerimgdiv").css("padding-top", headerHeight);
});