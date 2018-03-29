const http = require('http');
const path = require('path');
const express   = require('express');
//socket.io libraray
const socketIO = require('socket.io')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
//create server
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

//register event 
//connection listen  for new connection
io.on('connection', (socket)=>{
    console.log('New User Connection.');

     socket.emit('newMessage', {
        from: "Jhon",
        text:"see youn then",
        createdAt:1234
    });

    socket.on('createMessage', (message)=>{
        console.log('createMessage', message);
    });

    socket.on('disconnect',()=>{
        console.log('User was disconnected.')
    });
});
server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
})