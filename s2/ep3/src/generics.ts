
interface Voiture {
    marque: string;
    modele: string;
    annee: number;
  }

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

const maVoiture: Voiture = {
    marque: 'Peugeot',
    modele: '208',
    annee: 2017
  };
  const marque = getProperty(maVoiture, 'marque'); 

console.log(marque); 