import { tableaumoy, ordrealpha, valuelong } from "./src/utils/tableau.js";

// Ex 1
console.log("___Ex1___");
const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(tableau);

// Ex 2
console.log("___Ex2___");
const joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
console.log("Le premier jour de la semaine est :", joursSemaine[0]);

// Ex 3
console.log("___Ex3___");
const nombresPairs = [2, 4, 6, 8, 10];

// Calcul de la somme des nombres du tableau
const somme = nombresPairs.reduce((acc, nombre) => acc + nombre, 0);

console.log("Tableau des nombres pairs :", nombresPairs);
console.log("Somme des nombres pairs :", somme);

// Ex 4
console.log("___Ex4___");
const fruits = ["cerise", "kiwi", "citron", "ananas", "banane" ];
fruits.push("fraise");

console.log(fruits);

// Ex 5
console.log("___Ex5___");
const note = [10, 13, 11, 17, 8];

console.log(note)
const resultmoy = tableaumoy(note);
console.log(resultmoy)

// Ex 6
console.log("___Ex6___");
const oiseaux = ["corbeau", "peroquet", "chouette", "toucan"];
const choix = "chouette";

if (oiseaux.includes(choix)) {
    console.log("Le choix est dans le tableau oiseaux :", choix);
  } else {
    console.log("Le choix n'est pas dans le tableau oiseaux :", choix);
}

// Ex 7
console.log("___Ex7___");
const pays = ["France", "Suisse", "Allemagne", "Italie", "Espagne"];
console.log("tableau origine", pays);

const odrepays = ordrealpha(pays);
console.log("Nouveau tableau", odrepays);

// Ex 8
console.log("___Ex8___");
const mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

console.log(mois[2]);

// Ex 9
console.log("___Ex9___");
const valeur = ["1", "2", "3", "4", "5", "6", "7", "8"];

console.log("La valeur min est :", Math.min(...valeur));
console.log("La valeur max est :", Math.max(...valeur));

// Ex 10
console.log("___Ex10___");
const phrase = ["Bonjour ca va ?", "Hey comment vas tu ?", "Salut", "Hello comment vas tu mon ami ?"];

const resultat = valuelong(phrase);

console.log("La phrase la plus longue est :", resultat.phrase);
console.log("Sa longueur est :", resultat.longueur, "caractères");