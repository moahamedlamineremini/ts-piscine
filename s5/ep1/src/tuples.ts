function creescore(): [string, number] {
    return ["Alice", 100];
}

function afficherScore(score: [string, number]): void {
    console.log("Le joueur " + score[0] + " a un score de " + score[1] + ".");
}

afficherScore(creescore()); // Le joueur Alice a un score de 100.

