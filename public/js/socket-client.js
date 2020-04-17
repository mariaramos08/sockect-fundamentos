var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor')
});

// on escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor')
});

// los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Maria',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('respuesta server:', res)
});

socket.on('enviarMensaje', function(res) {
    console.log(res)
})