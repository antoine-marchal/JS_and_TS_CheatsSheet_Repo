//NodeJS
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('WebSocket connected');

  socket.on('message', message => {
    console.log('WebSocket message received:', message);

    // Traiter le message et envoyer une réponse si nécessaire
    socket.send('Hello from server!');
  });

  socket.on('close', () => {
    console.log('WebSocket disconnected');
  });

  socket.on('error', error => {
    console.error('WebSocket error:', error);
  });
});


//version File

const fs = require('fs');
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('WebSocket connected');

  socket.on('message', message => {
    if (message === 'send-file') {
      // Envoi d'un fichier binaire au client
      const filePath = './file.bin';
      const fileStream = fs.createReadStream(filePath);
      fileStream.on('data', data => socket.send(data));
      fileStream.on('end', () => socket.send('end-of-file'));
    } else {
      // Réception d'un fichier binaire du client
      console.log('WebSocket message received:', message);
      fs.writeFile('./received-file.bin', message, err => {
        if (err) {
          console.error('Error saving file:', err);
        } else {
          console.log('File saved successfully');
        }
      });
    }
  });

  socket.on('close', () => {
    console.log('WebSocket disconnected');
  });

  socket.on('error', error => {
    console.error('WebSocket error:', error);
  });
});
