// Ex 2
export function getMaxTableau(tableau) {
    return Math.max.apply(null, tableau);
}

// Ex 3
// aide : Recherche sur plusieurs site
  export function supprimerVoyelles(chaine) {
    // Supprimer les voyelles
    const nouvelleChaine = chaine.replace(/[aeiouAEIOU]/g, '');
    return nouvelleChaine;
}

// Ex 4
// aide : Recherche sur plusieurs site
export function trierNombres(nombres) {
    return nombres.sort();
}

// Ex 5
// aide : Recherche sur plusieurs site
export function nombreEnMots(nombre) {
    const unites = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    const dizaines = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    
    if (nombre < 0 || nombre > 99) {
        return "Le nombre doit être compris entre 0 et 99.";
    }

    if (nombre === 0) {
        return "zéro";
    }

    if (nombre <= 9) {
        return unites[nombre];
    } else if (nombre >= 10 && nombre <= 19) {
        return dizaines[1] + "-" + unites[nombre - 10];
    } else {
        const unite = nombre % 10;
        const dizaine = Math.floor(nombre / 10);
        const uniteEnMots = (unite === 0) ? "" : "-" + unites[unite];
        return dizaines[dizaine] + uniteEnMots;
    }
}

// Ex 6
// aide : Recherche sur plusieurs site
export function obtenirValeursPropriete(tableau, nomPropriete) {
    return tableau.map(objet => objet[nomPropriete]);
}

// Ex 7
// aide : Recherche sur plusieurs site
export function trierdecroissant(nombres) {
    return nombres.sort((a, b) => b - a);
}

// Ex 8
// aide : Recherche sur plusieurs site
export function transformerVoyellesEnMajuscule(tableau) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            const caractere = tableau[i][j].toLowerCase();

            if (voyelles.includes(caractere)) {
                tableau[i] = tableau[i].substring(0, j) + caractere.toUpperCase() + tableau[i].substring(j + 1);
            }
        }
    }

    return tableau;
}

// Ex 9
export function compterVoyelles(chaine) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let nombreVoyelles = 0;

    for (let i = 0; i < chaine.length; i++) {
        const caractere = chaine[i].toLowerCase();

        if (voyelles.includes(caractere)) {
            nombreVoyelles++;
        }
    }

    return nombreVoyelles;
}

// Ex 10
export function transformerconsonneEnMajuscule(tableau) {
    const voyelles = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            const caractere = tableau[i][j].toLowerCase();

            if (voyelles.includes(caractere)) {
                tableau[i] = tableau[i].substring(0, j) + caractere.toUpperCase() + tableau[i].substring(j + 1);
            }
        }
    }

    return tableau;
}