'use strict';

function calcul(tabint){
	let i = 0;
	let somme = 0;
	for(i;i<tabint.length;i++){
		somme = somme + tabint[i];
	}
	let moyenne = somme/tabint.length;

	let calcul = {
		nbElement : tabint.length,
		sum : somme,
		moy : moyenne
	};

	return calcul;
}

let tabint = [5,5,8,4,9,10];
let obj = calcul(tabint);
console.log(obj.nbElement);
console.log(obj.sum);
console.log(obj.moy);

let Etudiant = {
	numero : 123456,
	nom : "Dosda",
	prenom : "Clément",
	dateNaiss : new Date(1999,9,21),
	mail : "c.dosda21@gmail.com",
	notes : [],

	getAge() {
		let annee = this.dateNaiss.getFullYear();
		let mois = this.dateNaiss.getMonth();
		let jour = this.dateNaiss.getDate();
		let ajd = new Date();
		let age = ajd.getFullYear() - annee;
		if(ajd.getMonth()<mois){
			age -= 1; 
		}else if(mois==ajd.getMonth()){
			if(ajd.getDate()<jour){
				age -= 1;
			}
		}
		return age;
	},

	getInfo() {
		return (
			this.nom.toUpperCase() +"\n"+
			this.prenom +"\n"+
			this.dateNaiss.getDate()+'/'+
			this.dateNaiss.getMonth()+'/'+
			this.dateNaiss.getFullYear()
		);
	}

}

console.log(
	"ETUDIANT" +
	"\nnumero : " + Etudiant.numero +
	"\nnom : " + Etudiant.nom +
	"\nprenom : " + Etudiant.prenom +
	"\ndateNaiss : " + Etudiant.dateNaiss +
	"\nmail : " + Etudiant.mail +
	"\nnotes : " + Etudiant.notes+
	"\nage :" +Etudiant.getAge()+
	"\ninfo : "+Etudiant.getInfo()
);