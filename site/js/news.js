//Fade video button to whiteish on hover
$(".videobutton").mouseover(function() {
    $(this).stop().animate({ color: "#99A1BF", borderColor: "#99A1BF"}, 100);
}).mouseout(function() {
    $(this).stop().animate({ color: "#5B6073", borderColor: "#5B6073"}, 100);
});

function notAvailable() {
    alert("We regret to inform you that this kill video is not available.");
}