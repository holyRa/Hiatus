//Fix header
var headerHeight = $("header").outerHeight();

$("#dividerimgdiv").css("padding-top", headerHeight);
$(window).resize(function() {
    headerHeight = $("header").outerHeight();
    $("#dividerimgdiv").css("padding-top", headerHeight);
});

//Make content links fade to blue on hover
$(".content a").mouseover(function() {
    $(this).animate({ color: "#0099ff"}, 200);
}).mouseout(function() {
    $(this).animate({ color: "#5B6073"}, 200);
})

