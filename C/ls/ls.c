#include <stdio.h>
#include <dirent.h>

int main (int c, char *v[]) {
    struct dirent *pDirent;
    DIR *pDir;

    // si mauvais nb d'arguments : erreur
    if (c < 2) {
        printf ("Usage: programme <dirname>\n");
        return 1;
    }

    // récupération du répertoire
    pDir = opendir (v[1]);

    // si le répertoire n'existe pas : erreur
    if (pDir == NULL) {
        printf ("Impossible d'ouvrir le répertoire '%s'\n", v[1]);
        return 1;
    }

    // tant qu'il reste des fichiers dans le répertoire
    while ((pDirent = readdir(pDir)) != NULL) {
        printf ("%ld - %s\n",pDirent->d_ino, pDirent->d_name);
    }

    // fermeture de répertoire
    closedir (pDir);
    return 0;
}
