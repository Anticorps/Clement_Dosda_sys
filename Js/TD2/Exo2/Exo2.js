'use strict';




/**
 * Question 2.1
 * calcul la moyenne et la somme
 * du @param tabint
 * @return un tableau avec
 * nbElement somme et moyenne
 */
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

/*
 * Test question 2.1
 */
console.log("Test question 2.1");
let tabint = [5,5,8,4,9,10];
let obj = calcul(tabint);
console.log(obj.nbElement);
console.log(obj.sum);
console.log(obj.moy);
console.log("--------------------");


/**
 * Question 2.2 - 2.3 - 2.4 - 2.5
 * Créeation litéral d'un objets étudiant
 */
let Etudiant = {
	numero : 123456,
	nom : "Dosda",
	prenom : "Clément",
	dateNaiss : new Date(1999,9,21),
	mail : "c.dosda21@gmail.com",
	notes : [],

	/**
	 * recupere l'age de l'etudiant 
	 * @return entier age 
	 */
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

	/**
	 * Retourne les information de l'étudiant
	 * @return informations de l'étudiant
	 */
	getInfo() {
		return (
			this.nom.toUpperCase() +"\n"+
			this.prenom +"\n"+
			this.dateNaiss.getDate()+'/'+
			(this.dateNaiss.getMonth()+1)+'/'+
			this.dateNaiss.getFullYear()
		);
	},

	/**
	 * Ajoute une note au tableau notes
	 */
	ajoutNote(m,n){
		this.notes.push({
			matiere : m,
			note : n
		})
	},

	/**
	 *	calacul la moyenne des notes de l'étudiant
	 * @return la moyenne de l'étudiant
	 */
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

/*
 * Test question 2.2 - 2.3 - 2.4 - 2.5
 */

console.log("Test question 2.2 - 2.3 - 2.4 - 2.5");
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
console.log("--------------------");

/**
 * Question 2.6
 * Constructeur Etudiant2
 */
function Etudiant2(numetu,nom,prenom,dateNaiss,mail){
	this.numero = numetu;
	this.nom = nom;
	this.prenom = prenom;
	this.dateNaiss = dateNaiss;
	this.mail = mail;
	this.notes = [];
};

/**
 * recupere l'age de l'etudiant 
 * @return entier age 
 */
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
/**
 * Retourne les information de l'étudiant
 * @return informations de l'étudiant
 */
Etudiant2.prototype.getInfo = function() {
		return (
			this.nom.toUpperCase() +"\n"+
			this.prenom +"\n"+
			this.dateNaiss.getDate()+'/'+
			(this.dateNaiss.getMonth()+1)+'/'+
			this.dateNaiss.getFullYear()
		);
	};

/**
 * Ajoute une note au tableau notes
 */
Etudiant2.prototype.ajoutNote = function(m,n){
		this.notes.push({
			matiere : m,
			note : n
		});
	};


/**
 *	calacul la moyenne des notes de l'étudiant
 * @return la moyenne de l'étudiant
 */

Etudiant2.prototype.moy = function(){
		let i = 0;
		let somme = 0;
		for(i;i<this.notes.length;i++){
			somme = somme + this.notes[i].note;
		}
		let moy = somme/this.notes.length;
		return moy;
	};


/**
 * Test question 2.6
 */
console.log("Test question 2.6");
let etu = new Etudiant2(42013,"jass","jean",new Date(1996,11,11),"jj@caramail.com");

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
console.log("--------------------");


/**
 * Question 2.7
 * retourne la listes des étuiant
 * contenue dans @param tabEtu
 * qui sont nées en @param numMois
 */

function anniversaire(tabEtu,numMois){
	let tabRep = [];
	for(let i = 0; i < tabEtu.length;i++){
		if((tabEtu[i].dateNaiss.getMonth()+1)==numMois){
			tabRep.push(tabEtu[i]);
		}
	}
	return tabRep;
}

console.log("Test question 2.7");
let etu2 = new Etudiant2(42014,"dupont","jean",new Date(2001,11,1),"jd@caramail.com");
let tabanniversaire = anniversaire([Etudiant,etu,etu2],12);
for(var i = 0 ; i < tabanniversaire.length;i++){
	console.log(tabanniversaire[i].getInfo());
}
console.log("--------------------");


/**
 * Question 2.8
 * retourne la listes des étuiant
 * contenue dans @param tabEtu
 * ayant plus qu'un age donnée  @param age
 */
function age(tabEtu,age){
	let tabRep = [];
	for(let i = 0; i < tabEtu.length;i++){
		if(tabEtu[i].getAge()>age){
			tabRep.push(tabEtu[i]);
		}
	}
	return tabRep;
}

console.log("Test question 2.8");
let tabAge = age([Etudiant,etu,etu2],19);
for(var i = 0 ; i < tabAge.length;i++){
	console.log(tabAge[i].getInfo());
}
console.log("--------------------");

/**
 * Question 2.9 - 2.10
 * Constructeur grpEtu
 */
function grpEtu(nomgpe,formation,liste,annee){
	this.nomGroupe = nomgpe;
	this.formation = formation;
	this.liste = liste;
	this.annee = annee;
};

/**
 * Ajoute un étudiant dans les grpEtu
 */
grpEtu.prototype.ajoutEtu = function(Etudiant){
	this.liste.push(Etudiant);
};

/**
 * returoune les nombre d'étuiant dans le grp
 */
grpEtu.prototype.compteEtu = function(){
	return this.liste.length;
};

/**
 * Retourne la moy de chaque étudiant 
 * contenu dans un tableau
 * associatif
 */
grpEtu.prototype.moyEtu = function(){
	let tabmoy = [];
	for(var i = 0; i<this.liste.length;i++){
		tabmoy.push({
			nom : this.liste[i].prenom +" "+this.liste[i].nom,
			moy : this.liste[i].moy()});
	}
	return tabmoy;
};

console.log("Test question 2.9 - 2.10");
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
console.log("--------------------");



/**
 * Question 2.11
 * Ajoute un bonus de 2 point a une note donnée
 * @param matière au étudiant nées un mois donnée @param mois
 */
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
console.log("Test question 2.11");
console.log("note de com :"+etu.notes[2].note);
grpE.bonAnniversaire(12,"com");
console.log("apres application de bonAnniversaire "+etu.notes[2].note);
console.log("--------------------");

