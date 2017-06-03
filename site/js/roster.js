//Make armory imglink fade to greyscale on hover
$(".armory img").mouseover(function() {
    $(this).addClass("greyscale");
}).mouseout(function() {
    $(this).removeClass("greyscale");
});

