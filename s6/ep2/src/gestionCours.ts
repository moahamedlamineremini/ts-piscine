export interface Etudiant {
    id: number;
    nom: string;
    niveau: string; // ex: "Licence", "Master"
  }
  
  
  export interface Cours {
    code: string;
    titre: string;
    niveau: NiveauCours; // Utilisation d'un enum
  }
  
  export interface Professeur {
    id: number;
    nom: string;
    matiere: string;
  }
  
  export enum NiveauCours {
  Debutant,
  Intermediaire,
  Avance,
  }
  type Inscription = [Etudiant, Cours];
  
  function searchbycode<T,K extends keyof T> (
      tableau: T[],
      propriete: K,
      valeur: T[K]
    ): T | undefined {
      return tableau.find((element) => element[propriete] === valeur);
    }
  
  export class GestionCours {
      etudiants: Etudiant[] = [];
      cours: Cours[] = [];
      inscriptions: Inscription[] = [];
    ajouterCours(nouveauCours: Cours): void {
      this.cours.push(nouveauCours);
    }
  
    ajouterEtudiant(nouvelEtudiant: Etudiant): void {
      this.etudiants.push(nouvelEtudiant);
    }
      inscrireEtudiant(coursCode: string, etudiant: Etudiant ):void {
      const courses = searchbycode(this.cours, "code",coursCode )
      if(!courses){
          console.log("the courses are not defined")
      }else{
          this.inscriptions.push([etudiant, courses]);
          console.log(` ${etudiant.nom} a été inscrit au cours ${courses.titre}.`);
      
          this.notifierInscription(etudiant, courses);
      }
      }
      afficherInscriptions(): void{
         this.inscriptions.forEach(([etudiant, cours]) => {
          console.log(`- ${etudiant.nom} est inscrit au cours "${cours.titre}" (${NiveauCours[cours.niveau]})`);
        });
      }
      private notifierInscription(etudiant: Etudiant, cours: Cours): void {
          import("./moduleNotification").then((module) => {
            module.notifier(`${etudiant.nom} a été inscrit au cours ${cours.titre}`);
          });
        }
  }