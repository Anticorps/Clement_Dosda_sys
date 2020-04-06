'use strict';

function creerMultiplicateur(n, x = null){
	if(x==null){
		return (x) => n*x;
	}
	else{
		return () => x*n; 
	}
}

/**
 *	Affichages des tests de la fontion creerMultiplicateur
 */
let Multi5 = creerMultiplicateur(5)
let Multi = creerMultiplicateur(5,5);
console.log("3*5 : " + Multi5(3));
console.log("5*5 : "+ Multi());


function creerSequence(init, step){
	let i=0;
	return () => init + step*i++;
}

/**
 *	Affichages des tests de la fontion creerSequence
 */
let sequ = creerSequence(5,2);
console.log (" sequence  init : 5 stpe : 2 :"+ sequ());
console.log (" sequence  init : 5 stpe : 2 :"+ sequ());


function fibonacci(x,y){
	let fibo = [x, y];
  return () => {
    fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
    return fibo.join(' ');
  }
}



/**
 *	Affichages des tests de la fontion fibonacci
 */
let Fibo = fibonacci(2,3);
console.log("fibonacci : "+Fibo())
console.log(Fibo());


function power(n,x=null){
	if(x!=null){
		let x2=x;
		for (var i = 1 ; i < n; i++) {
			x2=x2*x;
		}
		return x2;
	}
	else{
		 return (x) => power(n, x);
	}
	
}

/**
 *	Affichages des tests de la fontion power
 */
let power1 = power(3,5);
let power2 = power(3);

console.log("5^3 : "+power1);
console.log("6^3 : "+power2(6));

function formatter(id){
  let cpt = id;
  return (msg) =>{
    return cpt++ +" : "+ msg;
  }
}

/**
 *	Affichages des tests de la fontion formatter
 */
let form =formatter(15);
console.log(form("le ciel est blanc"));
console.log(form("les roses sont rouges"));
console.log(form("les violletes sont bleues"));

function write(msg){
    console.log(msg);
}

function writeAlert(msg){
	alert(msg);
}

/**
 *	Affichages des tests de la fontion write et writeAlert
 */
write("test fonction write");
writeAlert("test fonction writeAlert");




function logger(formatter,w){
	return (msg) => w(formatter(msg));
}


/**
 *	Affichages des tests de la fontion logger
 */
let log1 = logger(formatter(1),write);
let log2 = logger(formatter(10),writeAlert);

log1("test logger 1");
log1("test logger 2")
log2("test logger 10");
log2("test logger 11");	
