//Var, let e const, booleani, stringhe
const a = 1;
let b = 1;
var c = 1;
var d = false;
let myName = "Chris";

console.log(a);
console.log(myName);

let stringa = 'Chris l\'evaso'; // \' per fare l'escape dei caratteri

let scritta = "Ciao sono" + myName; //Concatenazione

// Vedere il tipo di una variabile
let c = 10;

console.log(typeof c);

//Aggiustare i numeri decimale
let d = 5.345678;

console.log(c.toFixed(2)); // 2 numeri dopo la virgola

//Convertitre una stringa in un numero
let e = '46';

console.log(Number(e)); // Ora e è stato convertito a numero

//Template literals
let n = "Ciao sono Pino"
let m = `<h1> ${n} l'albero </h1>` // Permettono di inserire in una stringa delle funzioni o variabili

document.body.innerHTML = m;

let sos = "Questa è una stringa";

//Metodi per le stringe

console.log(sos.length); // ottenere la lunghezza della stringa

console.log(sos[1]); // ottenere un carattere specifico della stringa

console.log(sos[sos.length - 1]); // ottenere l'ultimo carattere della stringa

console.log(sos.indexOf("una")); // da dove inizia la parola data

let h = sos.indexOf("una");
console.log(sos.slice(h)); // taglia tutto quello prima di h

console.log(sos.toUpperCase()); // tutto maiuscolo
console.log(sos.toLowerCase()); // tutto minuscolo

console.log(sos.replace("stringa" , "frase")); // sostituisce stringa con frase