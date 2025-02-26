"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const maVoiture = {
    marque: 'Peugeot',
    modele: '208',
    annee: 2017
};
const marque = getProperty(maVoiture, 'marque');
console.log(marque);
