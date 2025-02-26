interface Employe {
    nom: string;
    poste: string;
}
interface Client {
    nom: string;
    etreprise: string;
}
type PersonnePro = Employe | Client;
declare function afficherInfoProfessionelle(personne: PersonnePro): void;
declare let employe1: Client;
declare let employe2: Employe;
