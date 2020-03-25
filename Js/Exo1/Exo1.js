'use strict';

function min(a,b) {
	return (a < b) ? a : b;
}

function max(a,b) {
	return (a > b) ? a : b;
}

function bingo(){
	for (var i = 1; i <= 100; i++) {
		console.log(i)
		if (i%3==0) {console.log("woueee");}
		if(i%5==0){console.log("yoooo");}
		if(i%73==0){console.log("Biinnngooo");}
	}
}

function power(n,x){
	let x2 = x;
	for (var i = 1 ; i < n; i++) {
		x2=x2*x;
	}
	console.log(x2);
}

function powerRecursif(n,x,tmp=0,x2){
	x2=x;
	if(tmp==n){
		return x*x2;
	}
	else{
		tmp++;
		x2 = x2*x;
		powerRecursif(n,x2,tmp)
	}
}

console.log("Minumum entre 2 et 8 : "+min(2,8));
console.log("Maximum entre 14 et 10 : "+max(14,10))

console.log("Minumum entre 2 et 8 : "+min(8,2));
console.log("Maximum entre 14 et 10 : "+max(10,14))
console.log(min);
bingo();
power(3,2);
console.log(powerRecursif(3,5));