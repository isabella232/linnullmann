


$("body").keydown(function(e) {

if(e.keyCode == 37) {

window.location.href = "/free-source/418-baseline-grid-sketch.html";

$.cookie('sketchArrows', 'off', {

expires : 365,

path : '/'

});

}

if(e.keyCode == 39) {

window.location.href = "/free-source/416-spotify-sidebar.html";

$.cookie('sketchArrows', 'off', {

expires : 365,

path : '/'

});

}

});
