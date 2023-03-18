const socket = new WebSocket('wss://example.com/ws');

socket.addEventListener('open', event => {
  console.log('WebSocket connected');
});

socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  console.log('WebSocket message received:', message);

  switch (message.type) {
    case 'chat':
      // Afficher le message dans la fenêtre de chat
      break;

    case 'status':
      // Afficher le statut dans l'interface utilisateur
      break;

    default:
      console.warn('Unknown WebSocket message type:', message.type);
      break;
  }
});

socket.addEventListener('close', event => {
  console.log('WebSocket disconnected');
});

socket.addEventListener('error', error => {
  console.error('WebSocket error:', error);
});

function sendChatMessage(message) {
  const chatMessage = {
    type: 'chat',
    text: message,
    timestamp: Date.now()
  };
  socket.send(JSON.stringify(chatMessage));
}


//Version File

const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', event => {
  console.log('WebSocket connected');
  socket.send('send-file');
});

socket.addEventListener('message', event => {
  if (event.data === 'end-of-file') {
    console.log('File transfer complete');
  } else {
    console.log('WebSocket message received:', event.data);
    // Écrire les données binaires dans un fichier sur le système de fichiers du client
    // ...
  }
});

socket.addEventListener('close', event => {
  console.log('WebSocket disconnected');
});

socket.addEventListener('error', error => {
  console.error('WebSocket error:', error);
});
