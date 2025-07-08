// Cambiare il testo
document.getElementById("cambiaTestoBtn").addEventListener("click", function() {
  document.getElementById("titolo").innerText = "Titolo modificato!";
});

// Aggiungere un elemento
document.getElementById("aggiungiElementoBtn").addEventListener("click", function() {
  const nuovoElemento = document.createElement("li");
  nuovoElemento.innerText = "Nuovo elemento";
  document.getElementById("lista").appendChild(nuovoElemento);
});

// Rimuovere un elemento
document.getElementById("rimuoviElementoBtn").addEventListener("click", function() {
  const lista = document.getElementById("lista");
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  }
});

// Evento tastiera (scrivi e aggiorna il paragrafo)
document.getElementById("inputTesto").addEventListener("input", function(event) {
  document.getElementById("outputTesto").innerText = "Hai scritto: " + event.target.value;
});

//Evento con un bottone
// Selezione degli elementi
const titolo = document.getElementById("titolo");
const paragrafo = document.querySelector(".paragrafo");
const bottone = document.getElementById("modificaBtn");

// Modifica al click
bottone.addEventListener("click", () => {

  // Cambia contenuto il contenuto
  titolo.innerHTML = "Titolo modificato!";
  paragrafo.textContent = "Questo paragrafo è stato aggiornato.";

  // Cambia stile lo stile
  titolo.style.color = "red";
  paragrafo.style.fontWeight = "bold";
});