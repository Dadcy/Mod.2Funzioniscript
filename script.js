/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function crazySum(x,y) {
     let somma = x + y;
    if (x !== y) {
        return somma 
     } else { return somma * 3;
        
     }; 
     console.log(crazySum(5,5));
     console.log(crazySum(5,6));

     */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*  function boundary(number) {
    let numIntero = parseInt(numIntero)
    if (numIntero > 20 && numIntero <= 100 || numIntero === 400) {
        verifica = true;
        return verifica;
    } else {
        verifica = false;
        return verifica;
    }
}; 
console.log(boundary(101));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* function reverseString(stringa) {
    let frase = stringa.split("").reverse("");
         return frase.join("");
         // return stringa.spilt("").reverse("").join("");
};
console.log(reverseString("EPICODE"));
 */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* function upperFirstFrase(stringa) {
    let parola = stringa.split(" ");
    let stringaFinale = [ ];
    for (let i = 0; i < parola.length; i++) {
        let primalettera = parola[i].charAt(0);
        let letteraMaiuscola = primalettera.toUpperCase();
        let rimanenzaParola = parola[i].slice(1);
        let parolaFinale = letteraMaiuscola + rimanenzaParola;
        stringaFinale.push(parolaFinale);
    }
    console.log(stringaFinale.join(" "));
}
upperFirstFrase("hola ciao");
 */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*  
function giveMeRandom(n) {
   let array = [];
   for (let i = 0; i < n; i++) {
    // 1°  array[i] = (Math.floor(Math.random() * 11));
    
    //2°   let numeroCasuale = Math.floor(Math.random()* 11);
    //     array.push(numeroCasuale);
    
    // 3°   array.push(Math.floor(Math.random() * 11))
}
    return array;
}
console.log(giveMeRandom(10));



*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*  
function area(l1,l2) {
    return l1 * l2;
}
console.log(area(4,4));

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 
function crazyDiff(n1) {
    let differenza = Math.abs(n1 - 19);
    if (differenza > 19) {
       return differenza * 3;
    }else{
      return  differenza;
    }
}
console.log(crazyDiff(- 20));

*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* 
// 1° versione

function codify(stringa) {
    if ((stringa === "code") || (stringa.substring(0, 4) === "code")) {
         return stringa;
    } else { let stringaModificata = "code" + stringa;
     return stringaModificata
    }
 }
// 2° versione

function codify(stringa){
        let code = "code";
        if (stringa.startsWith("code") ){// controlla se l'inzio della stringa sia code o se la stringa sia uguale a "code"
            return stringa;               
        } else { 
           return code.concat(stringa); // code + stringa
        }
}
console.log(codify("Mushu"));
console.log(codify("codefy"));

 */


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* 
function check3and7(number) {
    if((number >=0) && (number % 3 === 0 ) || (number % 7 === 0)){
        return true;
    } else if(typeof number !== "number" ){
       console.log("Inserisci un numero");
    } else{return false;
    }
}
console.log(check3and7(49));
console.log(check3and7("boh"));

*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
function cutString(stringa) {
    if(stringa.length > 2){
    return stringa.slice(1,stringa.length -1 );// slice(1,-1)
} else { console.log("inserire una parola di almeno 3 lettere");
}
}

console.log(cutString("so"));
console.log(cutString("sos"));
*/
