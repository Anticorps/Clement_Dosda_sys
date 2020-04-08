#ifndef VILLE_H
#define VILLE_H

#define TAILLE_NOM 50

typedef struct TVille {
  char nomVille[TAILLE_NOM];
  int CodePostal;
  struct TVille *suc;
}Ville;

typedef struct TVille *Liste;

int liste_vide(Liste l);

Liste recuperationFichier();

Liste insererQueue(Liste l, int CodePostal, char nomVille[TAILLE_NOM]);

void afficherCodePostal(Liste l, int CodePostal);

Liste supprimerTete(Liste l);

Liste listeLiberer(Liste l);


#endif
