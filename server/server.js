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
var IO = socketIO(server);
app.use(express.static(publicPath));

//register event 
//connection listen  for new connection
IO.on('connection', (socket)=>{
    console.log('New User Connection.');
    socket.on('disconnect',()=>{
        console.log('User was disconnected.')
    });
});
server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
})