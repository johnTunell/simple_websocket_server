$(document).ready(function() {
    var socket = io.connect('http://localhost:5000');
    // Setup button to send request

    socket.on('welcome', function (data) {
        console.log(data);
        socket.emit('hello', 'John')
    })

    socket.on('hello', function (data) {
        console.log(data);
    })
})
