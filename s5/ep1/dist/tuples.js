"use strict";
function creescore() {
    return ["Alice", 100];
}
function afficherScore(score) {
    console.log("Le joueur " + score[0] + " a un score de " + score[1] + ".");
}
afficherScore(creescore()); // Le joueur Alice a un score de 100.
