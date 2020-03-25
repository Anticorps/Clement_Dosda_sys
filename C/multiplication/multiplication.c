#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

static int score;

int rdm(){
    return rand() % 10 + 1;
}

void sortie(){
    printf("\nSCORE : %d\n", score);
    exit(0);
}

int main(){

    // initialisation du score
    score = 0;

    // initialisation de la gestion des signaux
    struct sigaction action;
    action.sa_handler = sortie;
    action.sa_flags = 0;
    sigemptyset (&action.sa_mask);
    sigaction(SIGALRM, &action, NULL);
    sigaction(SIGQUIT, &action, NULL);
    sigaction(SIGINT, &action, NULL);

    // initialisation du générateur de nb aléatoires
    srand(time(NULL));

    // opérandes et résultat
    int n, k, res;

    // boucle
    while (1){

        // programmation de l'alarme
        alarm(5);

        // génération d'opérandes aléatoires
        n = rdm();
        k = rdm();

        // saisie du résultat
        printf("%d * %d\n", n, k);
        printf("> ");
        scanf("%d", &res);

        // test du résultat
        if (res == n * k){
            score++;
        }
    }

    return 0;
}
