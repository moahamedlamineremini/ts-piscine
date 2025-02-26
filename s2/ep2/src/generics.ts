function premierElement<T>(array: T[]): T | undefined {
    if (array.length > 0) {
        return array[0];
    } else {
        console.error("Erreur: le tableau est vide.");
        return undefined;
    }
}

const nombres = [1, 2, 3];
const chaine = ["a", "b", "c"];
const vide: number[] = [];

console.log(premierElement(nombres)); // Devrait afficher 1
console.log(premierElement(chaine));  // Devrait afficher "a"
console.log(premierElement(vide));    // Devrait afficher une erreur et undefined