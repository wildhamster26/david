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