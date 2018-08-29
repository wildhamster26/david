let scriptsButton = document.querySelector("#scriptsButton")
let scripts = document.querySelector("#scripts");

scriptsButton.addEventListener("click", function(){
	scripts.classList.toggle("visibility");
});


let artButton = document.querySelector("#artButton")
let art = document.querySelector("#art");

artButton.addEventListener("click", function(){
	art.classList.toggle("visibility");
});


let filmButton = document.querySelector("#filmButton")
let film = document.querySelector("#film");

filmButton.addEventListener("click", function(){
	film.classList.toggle("visibility");
});