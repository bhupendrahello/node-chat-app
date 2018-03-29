var socket = io();
//listen event   
socket.on('connect', function(){
    console.log('Server connected');
    
    socket.emit('createMessage',{
        from:'Bhupendra',
        text:'Hello'
    })
    
});

socket.on('disconnect', function(){
   console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('New message', message);
});