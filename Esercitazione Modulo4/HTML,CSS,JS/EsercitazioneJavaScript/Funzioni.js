// Dichiarazione di una funzione (Function Declaration)
function saluta() {
  console.log("Ciao da una funzione dichiarata!");
}
saluta();

// Espressione di Funzione (Function Expression)
const salutaEspressa = function() {
  console.log("Ciao da una funzione espressa!");
};
salutaEspressa();

// Funzione Freccia (Arrow Function)
const salutaFreccia = () => {
  console.log("Ciao da una arrow function!");
};
salutaFreccia();


// Esempio di uso di tutti i tipi

// Function Declaration
function somma(a, b) {
  return a + b;
}

// Function Expression
const moltiplica = function(a, b) {
  return a * b;
};

// Arrow Function
const dividi = (a, b) => a / b;

console.log("Somma:", somma(4, 2)); // Restituisce 6
console.log("Moltiplicazione:", moltiplica(4, 2)); // Restituisce 8
console.log("Divisione:", dividi(4, 2)); // Restituisce 2

// Funzione personalizzata
let button = document.querySelector("#button_A");
let title = document.querySelector("h1");

function saluto() {
  title.innerHTML = "Ciao Lul";
}

// Cambiare il nome

    //HTML
    //<input type="text" name="nome" placeholder="nome persona"> 
    //<button>Saluta!</button>
    //<h1>Nessun saluto</h1>

let b = document.querySelector("button");
let t = document.querySelector("h1");
let nome = document.querySelector("input");

function saluta(name) {
  title.innerHTML = `Ciao ${name}`;
}

buttonA.addEventListener = ('click', () => { // Event Listener
  saluta(nome.value);
});

// Funzioni con il RETURN

function somma(a, b) {
  return a + b;
}

const risultato = somma(5, 3);
console.log("Il risultato è:", risultato);

// Altro esempio

function saluto(nome) {
  return "Ciao " + nome;
}

console.log(saluto("Luca"));