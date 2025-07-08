// Click del bottone
const bottone = document.getElementById("mioBottone");

bottone.addEventListener("click", () => { // Event Handler
  alert("Hai cliccato il bottone!");
});

// Esempio submit su un modulo
const form = document.getElementById("mioForm");

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita il ricaricamento della pagina
  alert("Modulo inviato!");
});

// Evento keydown (quando premi un tasto)
document.addEventListener("keydown", (evento) => { // Oggetto Event
  console.log("Hai premuto:", evento.key);
});

// Evento mouseover (passaggio del mouse)
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "orange";
});


// Inline Event Handler, direttamente sull'HTML

//<button onclick="saluta()">Cliccami</button>


// Esempio di event.preventDefault()
const fo = document.getElementById("mioForm");

  fo.addEventListener("submit", function(e) {
    e.preventDefault(); // Blocca il comportamento predefinito
    alert("Modulo intercettato, nessun invio!");
  });

  // Bubbling
  // L'evento parte dall’elemento più interno (es. bottone) e sale verso i contenitori
  document.getElementById("contenitore").addEventListener("click", function () {
    console.log("DIV cliccato (bubbling)");
  });

  document.getElementById("bottone").addEventListener("click", function () {
    console.log("BUTTON cliccato");
  });

  // Capturing 
  // L'evento viene intercettato dall’alto verso il basso: prima il contenitore esterno, poi l'elemento interno.
  document.getElementById("contenitore").addEventListener(
    "click",
    function () {
      console.log("DIV cliccato (capturing)");
    },
    true // attiva il capturing
  );

// Event delegator
//L'event delegation consiste nell'aggiungere un solo addEventListener a un contenitore esterno,
//e gestire gli eventi dei figli tramite l’oggetto event.target

    const lista = document.getElementById("lista");

  lista.addEventListener("click", function(e) {
    // Verifica che il target sia proprio un <li>
    if (e.target.tagName === "LI") {
      alert("Hai cliccato: " + e.target.textContent);
    }
  });

  
// Esempio di Evento

// Dichiariamo due variabili per 2 bottoni
const bottono= document.querySelector("#bottono");
const heading = document.querySelector("#heading");

//Variabile contatore, dichiarazione ed inizializzazione
let count = 1;

//Al click del bottone di id buttonA perte l'evento per aumentare il contatore

bottono.onclick = () => { // Listener
  heading.textContent = `${count} clicks so far`; // per aggiornare il count al click
  count += 1;
};