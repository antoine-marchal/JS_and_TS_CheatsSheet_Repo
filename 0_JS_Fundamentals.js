let nombre = 42; // déclare une variable nombre et l'initialise à 42
const PI = 3.14159; // déclare une constante PI et l'initialise à 3.14159

let nom = "John"; // déclare une variable nom de type string
let age = 25; // déclare une variable age de type number
let estVrai = true; // déclare une variable estVrai de type boolean
let tableau = [1, 2, 3]; // déclare une variable tableau de type array
let objet = { nom: "John", age: 25 }; // déclare une variable objet de type object
function doubler(nombre) { return nombre * 2; } // déclare une fonction doubler

let resultat = 10 + 5; // addition
let resultat2 = 10 - 5; // soustraction
let resultat3 = 10 * 5; // multiplication
let resultat4 = 10 / 5; // division
let resultat5 = 10 % 3; // modulo

//Structures de controle de flux
let x = 10;
if (x > 5) {
    console.log("x est supérieur à 5");
} else {
    console.log("x est inférieur ou égal à 5");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

while (x > 0) {
    console.log(x);
    x--;
}

//Functions
function additionner(a, b) {
    return a + b;
}

let resultat6 = additionner(10, 5); // 15

//in line function : 
let carre = (nombre) => nombre * nombre;

let timeit = async (f) => {
    let then = Date.now();
    await f();
    console.log(`Temps d'exécution : ${Date.now() - then} ms`);
  }
  const moment = require('moment');
  let timeit2 = async (f) => {
    let then = moment();
    await f();
    let now = moment();
    let duration = moment.duration(now.diff(then));
    console.log(`Temps d'exécution : ${duration.minutes()} min ${duration.seconds()} s ${duration.milliseconds()} ms`);
  }
  
//Callback functions
function faireQuelqueChose(callback) {
    setTimeout(() => {
      callback();
    }, 1000);
  }
  
  faireQuelqueChose(() => {
    console.log("Terminé!");
  });

 //Promises
 function faireQuelqueChose() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Terminé!");
      }, 1000);
    });
  }
  
  faireQuelqueChose().then((resultat) => {
    console.log(resultat);
  }).catch((erreur) => {
    console.log(erreur);
  });

//Classes
class Personne {
    constructor(nom, age = 0) {
      this._nom = nom; //on utilise l underscore pour montrer explicitement que c est une variable interne a la classe
      this._age = age;
    }
    // les get et sets ne sont pas implicites, il faut les specifier si on souhaite les utiliser
    get nom() { 
        return this._nom.toUpperCase();
      }
    
    set age(age) {
        if (age >= 0) {
          this._age = age;
        } else {
          throw new Error("L'âge doit être positif.");
        }
      }
    
    afficher() {
      console.log(`Nom : ${this.nom}, Age : ${this.age}`);
    }
  }
  
  let personne = new Personne("John", 25);
  personne.afficher(); // affiche "Nom : John, Age : 25"

//Appronfondir :

// Module principal
import { Personne } from './personne.js'; // Importation de la classe Personne depuis un autre fichier

// Événements
let bouton = document.querySelector('button'); // Récupération du bouton dans le DOM
bouton.addEventListener('click', function() { // Ajout d'un écouteur d'événements pour le clic sur le bouton
  console.log('Le bouton a été cliqué.');
});

// Promesses
let promesse = new Promise(function(resolve, reject) { // Création d'une promesse qui résout après 1 seconde
  setTimeout(function() {
    resolve('La promesse a été résolue.');
  }, 1000);
});

promesse.then(function(resultat) { // Attente de la résolution de la promesse
  console.log(resultat);
}).catch(function(erreur) { // Gestion des erreurs éventuelles
  console.error(erreur);
});

// Fonctions asynchrones
async function exempleAsynchrone() { // Définition d'une fonction asynchrone
  try {
    let resultat = await promesse; // Attente de la résolution de la promesse
    console.log(resultat);
  } catch (erreur) { // Gestion des erreurs éventuelles
    console.error(erreur);
  }
}

exempleAsynchrone(); // Appel de la fonction asynchrone

// Classes et prototypes
class Employe extends Personne { // Définition d'une classe Employe qui hérite de la classe Personne
  constructor(nom, age, salaire) {
    super(nom, age); // Appel du constructeur de la classe parente
    this.salaire = salaire; // Définition d'une propriété spécifique à la classe Employe
  }

  afficher() { // Définition d'une méthode spécifique à la classe Employe
    console.log(`Nom : ${this.nom}, Age : ${this.age}, Salaire : ${this.salaire}`);
  }
}

let employe = new Employe('John', 30, 50000); // Création d'un objet Employe
employe.afficher(); // Appel de la méthode afficher() de l'objet Employe
