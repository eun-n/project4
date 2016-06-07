
function eye () {
	document.querySelector("#coaster").src = 'assets/taeyeon1.mp4';	
	document.querySelector("#currentvid").load();
	play1();
	toggle();
}

function rain () {
	document.querySelector("#coaster").src = 'assets/taeyeon.mp4';
	document.querySelector("#currentvid").load();
	play1();
	toggle();
}

function toggle() {
	document.getElementById('test').setAttribute('visible', !document.getElementById('test').getAttribute('visible'));
	document.getElementById('test1').setAttribute('visible', !document.getElementById('test1').getAttribute('visible'));
}

function play1() {
	document.getElementById('coaster').play();
	document.getElementById('play').setAttribute('visible', false);
	document.getElementById('pause').setAttribute('visible', true);
}

function pause1() {
	document.getElementById('coaster').pause();
	document.getElementById('play').setAttribute('visible', true);
	document.getElementById('pause').setAttribute('visible', false);
}

function sound() {
	document.getElementById('coaster').muted = true;
	document.getElementById('mute').setAttribute('visible', true);
	document.getElementById('sound').setAttribute('visible', false);
}

function mute() {
	document.getElementById('coaster').muted = false;
	document.getElementById('mute').setAttribute('visible', false);
	document.getElementById('sound').setAttribute('visible', true);
}