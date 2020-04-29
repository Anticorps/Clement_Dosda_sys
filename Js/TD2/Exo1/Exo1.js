'use strict';


/*
 * Question 1.1
 * 
 * retourne un tableau de tous les entiers
 * entre @param a et @param b
 * @return tableau des entiers
 */
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

/**
 *	Test question 1.1
 */
console.log("Test question 1.1");
console.log("tableau de 5 - 15 : ");
var tab = range(5,15);
for(var i=0;i<tab.length;i++){
	console.log(tab[i]);
}
console.log("--------------------");

/*
 * Question 1.2
 * 
 * retourne la somme des 
 * elements du tableau d'entiers
 * @param tab
 * @return somme des entiers
 */
function sumfor(tab){
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

/**
 *	Test question 1.2
 */
console.log("Test question 1.2");
var tab2 = [1,5,6];
var tab3 = [5,5,8,4,9,10];
console.log("addition de 1,5,6 : (for) "+ sumfor(tab2));
console.log("addition de 1,5,6 : (forEach) "+sumforeach(tab2));
console.log("addition de 1,5,6 : (reduce) "+sumreduce(tab2));
console.log("addition de 5,5,8,4,9,10 : (for) "+ sumfor(tab3));
console.log("addition de 5,5,8,4,9,10 : (forEach) "+sumforeach(tab3));
console.log("addition de 5,5,8,4,9,10 : (reduce) "+sumreduce(tab3));
console.log("--------------------");

/*
 * Question 1.3
 * 
 * retourne la moyenne des 
 * elements du tableau d'entiers
 * @param tab
 * @return moyenne des entiers
 */
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


/**
 *	Test question 1.3
 */
console.log("Test question 1.3");
console.log("moyenne de 1,5,6 : (for) "+ moyfor(tab2));
console.log("moyenne de 1,5,6 : (forEach) "+moyforeach(tab2));
console.log("moyenne de 1,5,6 : (reduce) "+moyreduce(tab2));
console.log("moyenne de 5,5,8,4,9,10 : (for) "+ moyfor(tab3));
console.log("moyenne de 5,5,8,4,9,10 : (forEach) "+moyforeach(tab3));
console.log("moyenne de 5,5,8,4,9,10 : (reduce) "+moyreduce(tab3));
console.log("--------------------");

/*
 * Question 1.4 - 1.5 - 1.6 
 * retourne les chaine de caractère
 * du tableau @param t
 * contenant @param pattern
 * @return tableau de string
 */

function pattern(t,pattern){
	let rep = new Array();
	t.forEach(obj =>{
		if(obj.includes(pattern)){
			rep.push(obj.replace(pattern,pattern.toUpperCase()));
		}
	});
	return rep;
}

function pattern2(t,testFnct,transFnct){
	let rep = new Array();
	t.forEach(obj =>{
		if(testFnct(obj)){
			rep.push(transFnct(obj));
		}
	})
	return rep;
}

function pattern3(t,pattern){
	let contient = elmt => elmt.includes(pattern);
	let Upper = elmt => elmt.replace(pattern,pattern.toUpperCase());
	let rep = t.filter(contient).map(Upper);
	return rep;
}

/**
 *	Test question 1.4 - 1.5 - 1.6 
 */

console.log("Test question 1.4 - 1.5 - 1.6 ");
let tabString = ["pot","potiron","poivre","potins","porc"];
console.log(pattern(tabString,"pot"));
console.log(pattern2(tabString,
	(str)=> str.includes("pot"),
    (str) => str.replace('pot','POT')));
console.log(pattern3(tabString,"pot"));
console.log("--------------------");

/*
 * Question 1.7 - 1.8 
 * retourne des liens créer en fonctions
 * du tableau @param tabProduit
 * @return tableau de string
 */

function createUrl(tabProduit){
	let rep = new Array();
	tabProduit.forEach(obj =>{
			rep.push('http://www.cata.log/products/'+obj);
		
	})
	return rep;
}

function createUrl2(tabProduit){
	let rep ='<div class="cata"><ul>';
	tabProduit.forEach(obj =>{
			rep = rep+('<li> <a href="url"> http://www.cata.log/products/'+obj+'</a><li>');
		
	})
	rep = rep+' </ul> </div>'
	return rep;
}

/**
 *	Test question 1.7 - 1.8 
 */

let tabProduit = ["bannane","pomme","cerise","fraise"];
console.log("Test question 1.7 - 1.8");
console.log(createUrl(tabProduit));
console.log(createUrl2(tabProduit));
console.log("--------------------");
