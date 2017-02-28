const serverSocket = require('./../app.js').io;

function startServerSocket() {
    serverSocket.on('connection', (clientSocket) => {
        console.log("A client connected");
        clientSocket.emit('welcome', "Hello there client");

        /**
         * Socket Routes
         */
        
        clientSocket.on('hello', (data) => {
            console.log(data)
            clientSocket.emit('hello', `${data} hello from server`);
        });
    });
}

exports.startServerSocket = startServerSocket;
