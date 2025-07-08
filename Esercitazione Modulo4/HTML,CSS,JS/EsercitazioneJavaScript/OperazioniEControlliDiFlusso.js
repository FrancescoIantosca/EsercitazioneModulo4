let a = 10;
let b = 3;

// Operatori aritmetici
let somma = a + b;
let differenza = a - b;
let prodotto = a * b;
let divisione = a / b;

let incremento = a++;
let decremento = b--;

// Operatori di confronto e logici
if (a > b && somma !== 0) {
  console.log("a è maggiore di b e la somma è diversa da zero");
} else if (a === b || prodotto === 30) {
  console.log("a è uguale a b oppure il prodotto è 30");
} else {
  console.log("Nessuna condizione soddisfatta");
}

// Switch
let giorno = "martedì";
switch (giorno) {

    case "lunedì":
        console.log("Oggi è lunedì");
    break;

    case "martedì":
        console.log("Oggi è martedì");
    break;

    // Caso di default
    default:
        console.log("Giorno non riconosciuto");
    break;
}

// For
for (let i = 0; i < 3; i++) {
  console.log("Ciclo For: " + i);
}

// While
let j = 0;
while (j < 3) {
  console.log("Ciclo While: " + j);
  j++;
}

// Do...while
let k = 0;
do {
  console.log("Ciclo Do...While: " + k);
  k++;
} while (k < 3);