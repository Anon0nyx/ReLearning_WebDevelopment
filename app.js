function initialize_page() {
	console.log("Hello, Friend!");

}

function show_files() {
	async function getFile() {
		console.log("Launching File Explorer");
		const [file_handle] = await window.showOpenFilePicker();
		const file_data = await file_handle.getFile();
		const file_contents = await file_data.text();
		console.log(file_contents);
	}


	getFile()
}

function go_home() {
	document.body.getElementByTag("div").innerHTML = "<h1>Welcome Home</h1>";
}

window.addEventListener("hashchange", (event) => {
	switch (window.location.hash) {
		case "#home":
			go_home();
			break;
		case "#dashboard":
			console.log("Dashboard selected");
			break;
		case "#reports":
			console.log("Reports selected");
			break;
		default:
			console.log("Page Not Found");
	}
});


window.onload = initialize_page();
