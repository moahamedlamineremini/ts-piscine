// interfaces

interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  etreprise: string;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionelle(personne: PersonnePro) {
  if("poste" in personne) {
    console.log("Employé: " + personne.nom + " travaille comme " + personne.poste);
  } else {
    console.log("Client: " + personne.nom + " est associé à l'entreprise " + personne.etreprise);
  }
  }

  let employe1: Client = { nom: "Mohamed", etreprise: "facebook" };
  let employe2: Employe = { nom: "Ahmed", poste: "Développeur" };

  afficherInfoProfessionelle(employe1); // Client: Mohamed est associé à l'entreprise facebook
  afficherInfoProfessionelle(employe2); // Employé: Ahmed travaille comme Développeur