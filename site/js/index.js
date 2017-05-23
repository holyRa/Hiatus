//Make content links fade to blue on hover
$(".content a").mouseover(function() {
    $(this).stop().animate({ color: "#0099ff"}, 100);
}).mouseout(function() {
    $(this).stop().animate({ color: "#5B6073"}, 100);
});

