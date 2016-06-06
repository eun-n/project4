
function eye () {
	document.querySelector("#coaster").src = 'assets/taeyeon1.mp4';
	// document.querySelector("#coaster").src = 'https://www.youtube.com/v/eHir_vB1RUI';
	
	document.querySelector("#currentvid").load();
}

function rain () {
	document.querySelector("#coaster").src = 'assets/taeyeon.mp4';
	document.querySelector("#currentvid").load();
}

function hide() {
	document.getElementById('test').setAttribute('visible', false);
	document.getElementById('test1').setAttribute('visible', false);
	document.getElementById('menuhide').setAttribute('visible', false);
	document.getElementById('menushow').setAttribute('visible', true);
}

function show() {
	document.getElementById('test').setAttribute('visible', true);
	document.getElementById('test1').setAttribute('visible', true);
	document.getElementById('menushow').setAttribute('visible', false);
	document.getElementById('menuhide').setAttribute('visible', true);
}
