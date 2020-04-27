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
			(this.dateNaiss.getMonth()+1)+'/'+
			this.dateNaiss.getFullYear()
		);
	},

	ajoutNote(m,n){
		this.notes.push({
			matiere : m,
			note : n
		})
	},

	moy(){
		let i = 0;
		let somme = 0;
		for(i;i<this.notes.length;i++){
			somme = somme + this.notes[i].note;
		}
		let moy = somme/this.notes.length;
		return moy;
	}

}


Etudiant.ajoutNote("C",15);
Etudiant.ajoutNote("reseau",10);
Etudiant.ajoutNote("com",5);
console.log(
	"ETUDIANT" +
	"\nnumero : " + Etudiant.numero +
	"\nnom : " + Etudiant.nom +
	"\nprenom : " + Etudiant.prenom +
	"\ndateNaiss : " + Etudiant.dateNaiss +
	"\nmail : " + Etudiant.mail +
	"\nmoyenne : " + Etudiant.moy() + 
	"\nage :" +Etudiant.getAge()+
	"\ninfo : "+Etudiant.getInfo()
);

function Etudiant2(numetu,nom,prenom,dateNaiss,mail){
	this.numero = numetu;
	this.nom = nom;
	this.prenom = prenom;
	this.dateNaiss = dateNaiss;
	this.mail = mail;
	this.notes = [];
};

Etudiant2.prototype.getAge = function() {
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
	};

Etudiant2.prototype.getInfo = function() {
		return (
			this.nom.toUpperCase() +"\n"+
			this.prenom +"\n"+
			this.dateNaiss.getDate()+'/'+
			(this.dateNaiss.getMonth()+1)+'/'+
			this.dateNaiss.getFullYear()
		);
	};

Etudiant2.prototype.ajoutNote = function(m,n){
		this.notes.push({
			matiere : m,
			note : n
		});
	};

Etudiant2.prototype.moy = function(){
		let i = 0;
		let somme = 0;
		for(i;i<this.notes.length;i++){
			somme = somme + this.notes[i].note;
		}
		let moy = somme/this.notes.length;
		return moy;
	};


let etu = new Etudiant2("42013","jass","jean",new Date(1996,11,11),"jj@caramail.com");

etu.ajoutNote("C",12);
etu.ajoutNote("reseau",11);
etu.ajoutNote("com",10);
console.log(
	"ETUDIANT" +
	"\nnumero : " + etu.numero +
	"\nnom : " + etu.nom +
	"\nprenom : " + etu.prenom +
	"\ndateNaiss : " + etu.dateNaiss +
	"\nmail : " + etu.mail +
	"\nmoyenne : " + etu.moy() + 
	"\nage :" +etu.getAge()+
	"\ninfo : "+etu.getInfo()
);



function anniversaire(tabEtu,numMois){
	let tabRep = [];
	for(let i = 0; i < tabEtu.length;i++){
		if((tabEtu[i].dateNaiss.getMonth()+1)==numMois){
			tabRep.push(tabEtu[i]);
		}
	}
	return tabRep;
}

let etu2 = new Etudiant2("42014","dupont","jean",new Date(2001,11,1),"cb@caramail.com");
let tabanniversaire = anniversaire([Etudiant,etu,etu2],12);
for(var i = 0 ; i < tabanniversaire.length;i++){
	console.log(tabanniversaire[i].getInfo());
}


function age(tabEtu,age){
	let tabRep = [];
	for(let i = 0; i < tabEtu.length;i++){
		if(tabEtu[i].getAge()>age){
			tabRep.push(tabEtu[i]);
		}
	}
	return tabRep;
}

let tabAge = age([Etudiant,etu,etu2],19);
for(var i = 0 ; i < tabAge.length;i++){
	console.log(tabAge[i].getInfo());
}


function grpEtu(nomgpe,formation,liste,annee){
	this.nomGroupe = nomgpe;
	this.formation = formation;
	this.liste = liste;
	this.annee = annee;
};

grpEtu.prototype.ajoutEtu = function(Etudiant){
	this.liste.push(Etudiant);
};

grpEtu.prototype.compteEtu = function(){
	return this.liste.length;
};

grpEtu.prototype.moyEtu = function(){
	let tabmoy = [];
	for(var i = 0; i<this.liste.length;i++){
		tabmoy.push({
			nom : this.liste[i].prenom +" "+this.liste[i].nom,
			moy : this.liste[i].moy()});
	}
	return tabmoy;
};

grpEtu.prototype.bonAnniversaire = function(mois,matiere){
	let tabBA = anniversaire(this.liste,mois);
	for(var i = 0; i<tabBA.length; i++){
		for(var y=0; y<tabBA[i].notes.length; y++){
			if(tabBA[i].notes[y].matiere == matiere)
			{
				tabBA[i].notes[y].note += 2 ;
			}
		}
	}
};

let grpE = new grpEtu("as","informatique",[Etudiant,etu],2019);
grpE.ajoutEtu(etu2);

console.log(
	"grpE"+
	"\n nom grpE : "+grpE.nomGroupe+
	"\n formation : "+grpE.formation+
	"\n liste : "+grpE.liste+
	"\n annee : "+grpE.annee+
	"\n nombre d'etudiant : "+grpE.compteEtu());

let tabmoy = grpE.moyEtu();
for(var i=0;i<tabmoy.length;i++){
	console.log(tabmoy[i].nom+" : "+tabmoy[i].moy);
}



console.log(etu.notes[2].note);
grpE.bonAnniversaire(12,"com");
console.log("apres application de bonAnniversaire "+etu.notes[2].note);


