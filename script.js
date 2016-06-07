
function eye () {
	document.querySelector("#coaster").src = 'assets/taeyeon1.mp4';	
	document.querySelector("#currentvid").load();
	toggle();
}

function rain () {
	document.querySelector("#coaster").src = 'assets/taeyeon.mp4';
	document.querySelector("#currentvid").load();
	toggle();
}

function toggle() {
	document.getElementById('test').setAttribute('visible', !document.getElementById('test').getAttribute('visible'));
	document.getElementById('test1').setAttribute('visible', !document.getElementById('test1').getAttribute('visible'));
}

function play1() {
	document.getElementById('coaster').play();
	document.getElementById('play').setAttribute('visible', !document.getElementById('play').getAttribute('visible'));
	document.getElementById('pause').setAttribute('visible', !document.getElementById('pause').getAttribute('visible'));
}

function pause1() {
	document.getElementById('coaster').pause();
	document.getElementById('play').setAttribute('visible', !document.getElementById('play').getAttribute('visible'));
	document.getElementById('pause').setAttribute('visible', !document.getElementById('pause').getAttribute('visible'));
}