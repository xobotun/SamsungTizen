var startTime;
var checkTime;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
	
}

var isImgVisible = true;
function revertImageVisibility() {
	var img = document.getElementById('img');
	if (isImgVisible)
		img.style.visibility = 'hidden';
	else
		img.style.visibility = 'visible';
	isImgVisible = !isImgVisible;
}

function showScreenData() {
	var w = window,
    d = document,
    x = w.screen.width,
    y = w.screen.height,
	div = d.getElementById('divtext');
	
	div.innerHTML = " " + x + " × " + y;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorifyThirdText() {
	$("#third__text").css("color", getRandomColor());
}
