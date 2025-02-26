//Définition des l'interface 
interface Adresse {
  rue: string;
  ville: string;
}

interface Personne {
    nom: string;
    age: number;
    readonly id: number;
    adresse?: Adresse;
  }

  // function affichage de l'objet
  function afficherPersonneAvencee(personne: Personne) {
    if(personne.adresse){
      console.log("Bonjour, je m'appelle " + personne.nom + "(ID: " + personne.id + "), j'ai " 
        + personne.age + "ans et j'habite au " + personne.adresse.rue + ", " 
        + personne.adresse.ville + ".");
      } else {
        console.log("Bonjour, je m'appelle " + personne.nom + "(ID: " + personne.id + "), j'ai " 
        + personne.age + "ans.");
      }
  }

let personne2: Personne = {nom: "Mohamed", age: 19, id: 2, adresse: {rue: "123 Rue de la Paix", ville: "Paris"}};
let personne3: Personne = {nom: "Mohamed", age: 19, id: 3};

afficherPersonneAvencee(personne2);
afficherPersonneAvencee(personne3);