// Ex 5
// aide : plusieurs sites
export function tableaumoy(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
      summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
  }

// Ex 7
// aide : Recherche sur plusieurs site
export function ordrealpha(nombres) {
    return nombres.sort();
}

// Ex 10
// aide : Recherche sur plusieurs site
export function valuelong(phrase) {
    const resultat = phrase.reduce((plusLong, valeur) => {
        return valeur.length > plusLong.phrase.length ? { phrase: valeur, longueur: valeur.length } : plusLong;
    }, { phrase: "", longueur: 0 });

    return resultat;
};