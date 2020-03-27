'use strict';

function creerMultiplicateur(n){
	return (x) => x*n; 
}

let Multi5 = creerMultiplicateur(5)
console.log("3*5 : " + Multi5(3));


function creerSequence(init, step){
	let i=0;
	return () => init + step*i++;
}

let sequ = creerSequence(5,2);
console.log (" sequence  init : 5 stpe : 2 :"+ sequ());
console.log (" sequence  init : 5 stpe : 2 :"+ sequ());

function fibonacci(x,y){
	let u=x;
	let u2=y;
	return () => u = u-1+u-2;
}

let Fibo = fibonacci(2,3);
console.log("fibonacci : "+Fibo());
console.log("fibonacci : "+Fibo());
console.log("fibonacci : "+Fibo());