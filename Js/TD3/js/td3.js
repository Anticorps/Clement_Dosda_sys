'use strict';

function logClick(){
    console.log("click");
}

let b1 = document.getElementById("ex1");
let b2 = document.getElementById("ex3");
let b3 = document.getElementById("ex4b");
b1.addEventListener("click",(event) => {
  logClick();
  updateButtonClass(event);
  clickCount();
});

b2.addEventListener("click",(event) => {
  clearList();
});

b3.addEventListener("click",(event) => {
  incrInputValue();
});

function updateButtonClass(e){

	if(e.target.className == 'c1'){
		e.target.classList.replace("c1","c2");
	}
	else if(e.target.className == 'c2'){
		e.target.classList.replace("c2","c3");
	}
	else{
		e.target.classList.replace("c3","c1");
	}
}

function clickCount(){
	let liste = document.querySelector("#ex2");
	let count = liste.childElementCount;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode('click boutton : ' + count));
	liste.appendChild(li);
}

function clearList(){
	let liste = document.querySelector("#ex2");
	let count = liste.childElementCount;
	for(var i=0;i<count;i++){
		liste.lastChild.remove();
	}
}

function incrInputValue(){
	document.querySelector('#ex4i').value = 
	parseInt(document.querySelector('#ex4i').value) + 1;
}