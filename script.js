

function eye () {
	document.querySelector("#coaster").src = 'assets/taeyeon1.mp4';
	// document.querySelector("#coaster").src = 'https://www.youtube.com/v/eHir_vB1RUI';
	
	document.querySelector("#currentvid").load();
}

function rain () {
	document.querySelector("#coaster").src = 'assets/taeyeon.mp4';
	document.querySelector("#currentvid").load();
}


// document.querySelector('#currentvid').addEventListener('click', function () {
//   document.getElementById("currentvid").src='#taeyeon';
// 	document.getElementById("currentvid").load();
//   console.log('I was clicked!');
// });