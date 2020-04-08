
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ville.h"


int main(){
  int i;
  Liste l;
  l = recuperationFichier();
   for (i=1000 ; i<=90000 ; i+=10)  {
        afficherCodePostal(l, i);
    }

    l = listeLiberer(l);
  return 0;
}