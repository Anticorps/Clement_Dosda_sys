'use strict';

function range(a,b){
	var tab = new Array();
	if(a<b){
		for(var i=a;i<b+1;i++){
			tab.push(i);
		}
	}
	else{
		for(var i=b;i<a+1;i++){
			tab.push(i);
		}
	}

	return tab;
}


console.log("tableau de 5 - 15 : ");
var tab = range(5,15);
for(var i=0;i<tab.length;i++){
	console.log(tab[i]);
}

function sumfor(tab=new Array()){
	var sum=0;
	for(var i=0;i<tab.length;i++){
		sum = sum + tab[i];
	}
	return sum;
}

function sumforeach(tab){
	var sum =0;
	tab.forEach(x => sum = sum + x);
	return sum;
}

function sumreduce(tab){
	var sum=(acc, elem)=>acc+elem;
	return tab.reduce(sum,0);

}


var tab2 = [1,5,6];
var tab3 = [5,5,8,4,9,10];
console.log("addition de 1,5,6 : (for) "+ sumfor(tab2));
console.log("addition de 1,5,6 : (forEach) "+sumforeach(tab2));
console.log("addition de 1,5,6 : (reduce) "+sumreduce(tab2));
console.log("addition de 5,5,8,4,9,10 : (for) "+ sumfor(tab3));
console.log("addition de 5,5,8,4,9,10 : (forEach) "+sumforeach(tab3));
console.log("addition de 5,5,8,4,9,10 : (reduce) "+sumreduce(tab3));

function moyfor(tab){
	var sum = 0;
	var i = 0;
	for(i;i<tab.length;i++){
		sum = sum + tab[i];
	}
	return sum/i;
}

function moyforeach(tab){
	var sum = 0;
	tab.forEach(x => sum = sum + x );
	return sum/tab.length;
}

function moyreduce(tab){
	var sum=(acc, elem)=>acc+elem;
	return tab.reduce(sum,0)/tab.length;
}

console.log("moyenne de 1,5,6 : (for) "+ moyfor(tab2));
console.log("moyenne de 1,5,6 : (forEach) "+moyforeach(tab2));
console.log("moyenne de 1,5,6 : (reduce) "+moyreduce(tab2));
console.log("moyenne de 5,5,8,4,9,10 : (for) "+ moyfor(tab3));
console.log("moyenne de 5,5,8,4,9,10 : (forEach) "+moyforeach(tab3));
console.log("moyenne de 5,5,8,4,9,10 : (reduce) "+moyreduce(tab3));


function pattern(t,pattern){
	let rep = new Array();
	t.forEach(obj =>{
		if(obj.includes(pattern)){
			rep.push(obj.replace(pattern,pattern.toUpperCase()));
		}
		else{
			rep.push(obj);
		}
	});
	return rep;
}


let tabString = ["pot","potiron","poivre","potins","porc"];
console.log(pattern(tabString,"pot"));