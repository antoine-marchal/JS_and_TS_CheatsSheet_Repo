// Définition d'une interface pour un objet Personne
interface Personne {
    nom: string;
    age: number;
  }
  
  // Définition d'une classe pour un objet Point
  class Point {
    constructor(public x: number, public y: number) {}
  
    // Définition d'une méthode pour calculer la distance entre deux points
    distanceTo(point: Point) {
      const dx = this.x - point.x;
      const dy = this.y - point.y;
      return Math.sqrt(dx ** 2 + dy ** 2);
    }
  }
  
  // Définition d'une fonction pour créer une instance de la classe Point
  function createPoint(x: number, y: number) {
    return new Point(x, y);
  }
  
  // Utilisation de l'interface et de la classe
  const personne: Personne = { nom: 'Jean', age: 30 };
  const point1 = createPoint(0, 0);
  const point2 = createPoint(3, 4);
  console.log(personne.nom, personne.age, point1.distanceTo(point2));
  
  interface Animal {
    nom: string;
    age: number;
    afficher(): void;
  }
  
  class Chien implements Animal {
    constructor(public nom: string, public age: number) {}
  
    aboyer(): void {
      console.log('Wouaf!');
    }
  
    afficher(): void {
      console.log(`Je suis un chien nommé ${this.nom} et j'ai ${this.age} ans.`);
    }
  }
  
  class Chat implements Animal {
    constructor(public nom: string, public age: number) {}
  
    miauler(): void {
      console.log('Miaou!');
    }
  
    afficher(): void {
      console.log(`Je suis un chat nommé ${this.nom} et j'ai ${this.age} ans.`);
    }
  }
  
  function creerAnimal<T extends Animal>(type: new (nom: string, age: number) => T, nom: string, age: number): T {
    return new type(nom, age);
  }
  
  let chien = creerAnimal(Chien, 'Max', 2);
  let chat = creerAnimal(Chat, 'Minou', 3);
  
  chien.afficher();
  chien.aboyer();
  
  chat.afficher();
  chat.miauler();
  

  //Module
  // Dans le fichier foo.ts
export function faireQuelqueChose() {
  console.log("Je fais quelque chose.");
}

// Dans le fichier main.ts
import { faireQuelqueChose } from './foo';
faireQuelqueChose();


// Dans le fichier foo.ts
namespace MonEspaceDeNoms {
  export function faireQuelqueChose() {
    console.log("Je fais quelque chose.");
  }
}

// Dans le fichier main.ts
MonEspaceDeNoms.faireQuelqueChose();
