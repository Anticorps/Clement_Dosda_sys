#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ville.h"



/* Test si une liste est vide */
int liste_vide(Liste l)
{
  return (l == NULL);
}


/* Initialisation d'une liste */
Liste recuperationFichier()
{
  char nomVille[TAILLE_NOM];
  int CodePostal;
  Liste l = NULL;
  FILE *src;
  src=fopen("ville.txt", "r");
  if(src == NULL){
    printf("Erreur lors de l'ouverture du ficher");
    exit(1);
  }
  while (fscanf(src, "%s", nomVille) != EOF){
        fscanf(src, "%d", &CodePostal);
        l = insererQueue(l, CodePostal, nomVille);
    }

    fclose(src);
    return l;
}


void afficherCodePostal(Liste l, int CodePostal){
  int tmp = 1;
  while(!liste_vide(l)){
    if(l->CodePostal==CodePostal){
      if(tmp==1){
        printf("Code postal : %d \n",CodePostal);
        tmp=0;
      }
      printf("%s\n", l->nomVille);
    }
    l=l->suc;
  }
  if(tmp==0){
    printf("-----------------------------------\n");
  }
}

/* Suppression d'un élément en tête de liste */
Liste liste_tetesupprimer(Liste l)
{
  Liste p = NULL;

  if (!liste_vide(l)) {
    p = l->suc;
    free(l);
  }

  return (p) ;
}


Liste insererQueue(Liste l, int CodePostal, char nomVille[TAILLE_NOM])
{
  if(liste_vide(l))
  {
    Liste p = (Liste) malloc(sizeof(Ville));
    if (p == NULL){
      printf("Allocation impossible...\n");
      exit(1);
    }

    p->CodePostal = CodePostal;
    strcpy(p->nomVille, nomVille);
  }
  else
  {
    Liste lrep = l;
    Liste p = (Liste) malloc(sizeof(Ville));
    if (p == NULL){
      printf("Allocation impossible...\n");
      exit(1);
    }

    while(!liste_vide(l->suc))
    {
      l=l->suc;
    }
    p->CodePostal=CodePostal;
    strcpy(p->nomVille, nomVille);
    p->suc = NULL;
    l->suc =p;

    return (lrep);
  }
}

/* Suppression d'un élément en tête de liste */
Liste supprimerTete(Liste l)
{
  Liste p = NULL;

  if (!liste_vide(l)) {
    p = l->suc;
    free(l);
  }

  return (p) ;
}




Liste listeLiberer(Liste l)
{
  while (!liste_vide(l))
  {
    l=supprimerTete(l);
  }
  return l;
}
