
// Voici une liste des fonctionnalités courantes des Web Workers utilisées dans cet exemple :

//     Worker(scriptURL): crée un nouveau Web Worker à partir d'un script spécifié par l'URL.
//     postMessage(message): envoie un message au Web Worker.
//     addEventListener(type, listener): ajoute un écouteur d'événement pour les événements spécifiés.
//     self: une référence à l'objet global dans le contexte du Web Worker.
//     importScripts(urls): charge un ou plusieurs scripts dans le contexte du Web Worker.
//     onmessage: un écouteur d'événement prédéfini pour la réception de messages du script principal.
//     onerror: un écouteur d'événement prédéfini pour la gestion des erreurs dans le Web Worker.

// Création d'un nouveau Web Worker
const worker = new Worker('worker.js');

// Envoi de données au Web Worker
worker.postMessage({ type: 'start', data: [1, 2, 3, 4, 5] });

// Ajout d'un écouteur d'événement pour la réception de données du Web Worker
worker.addEventListener('message', event => {
  // Affichage des données reçues
  console.log(event.data);
});

// Chargement d'un script dans le Web Worker
worker.importScripts('helpers.js');

// Définition de la fonction de traitement pour le Web Worker
function processData(data) {
  // Traitement des données
  const result = data.reduce((acc, value) => acc + value, 0);

  // Envoi des résultats au script principal
  self.postMessage({ type: 'result', data: result });
}
