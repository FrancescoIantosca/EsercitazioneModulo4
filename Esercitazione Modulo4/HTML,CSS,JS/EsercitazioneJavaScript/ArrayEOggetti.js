// Array
const numeri = [1, 2, 3];

numeri.push(4); // aggiunge in fondo
numeri.unshift(0); // aggiunge in testa

// Rimuovere elementi
numeri.pop(); // rimuove l’ultimo
numeri.shift(); // rimuove il primo

// Accesso diretto
console.log(numeri[1]);

// Lunghezza
console.log(numeri.length);

let n = ['blu, giallo, verde'];

let dta = n.split(","); // Dividere la stringa in un array quando c'è la virgola
let dt = n.join(","); // Nella stringa separa gli elementi con la virgola


//Oggetto
let persona = {
  nome: "Luca", // Proprietà, sono le variabili
  età: 30,
  colori: ['blu', 'giallo', 'verde'],

  indirizzo: {
    via: "Pane",
    cap: 83000,
  },

  saluta: function () { // Metodo, le funzioni di particolari oggetti
    console.log("Ciao, mi chiamo " + this.nome);
  }
};

console.log(persona);
console.log(persona.colori[2]);

console.log(persona['nome']); // Per prendere solo il nome dell'oggetto persona (braket notation)
console.log(persona.nome); // è la stessa cosa di sopra (dot notation)

// Accedere alla proprietà
persona.nome = "Pino";
persona.indirizzo.via = "Panino";
persona.colori[2] = "blu";

// Aggiunta proprietà
persona.cognomenome = "Pluto";

// Uso metodo
persona.saluta;