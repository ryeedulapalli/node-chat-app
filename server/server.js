const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//static middleware to serve up public folder
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Andy',
        text: 'Hey',
        createdAt: 2200
    });

    socket.on('createMessage', (newMessage) => {
        console.log('Create Message', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from client');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});