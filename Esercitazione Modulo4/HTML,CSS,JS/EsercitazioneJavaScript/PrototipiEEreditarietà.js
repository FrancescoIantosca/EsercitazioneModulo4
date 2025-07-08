// Funzione costruttore
function Persona(nome, eta) {

  this.nome = nome;
  this.eta = eta;

}

//Metodo
this.saluto = function(){

    console.log("Ciao");
}

// Metodo condiviso tramite prototipo
Persona.prototype.vecchiaia = function () {

    // Blocco IF in line
  console.log("Ho" + this.eta + ", sono:" + (this.eta > 50) ? "vecchio" : "giovane");

};

// Creazione di una persona
const persona1 = new Persona("Luca", 30);

persona1.saluto();
persona1.vecchiaia();

// Nuovo oggetto Studente che eredita da Persona
function Studente(nome, eta, scuola) {

  Persona.call(this, nome, eta); // eredita proprietà
  this.scuola = scuola;
}

// Collegamento del prototipo per ereditare i metodi
Studente.prototype = Object.create(Persona.prototype);
Studente.prototype.constructor = Studente;

// Metodo per lo Studente
Studente.prototype.presentaScuola = function () {
  console.log("Frequento la scuola: " + this.scuola);
};

// Creazione di uno studente
const studente1 = new Studente("Anna", 20, "Istituto Tecnico");

studente1.saluta();
studente1.presentaScuola();




// Prototipi e Ereditarietà con syntax (ES6)

// Template di una persona (astrazione di una persona)
class Persono {

    // Costruttore
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }

  saluta() {
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
  }
}

class Studente extends Persono {

  constructor(nome, eta, scuola) {
    // chiama il costruttore della superclasse
    super(nome, eta);
    this.scuola = scuola;
  }

  presentaScuola() {
    console.log(`Frequento la scuola: ${this.scuola}`);
  }
}

const studente2 = new Studente("Marco", 17, "Liceo Scientifico");
studente2.saluta();
studente2.presentaScuola();