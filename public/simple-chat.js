var socket = io();

socket.on('welcome', function(data){
  $('<li>').text(data.message).appendTo('#message-log');
});

socket.on('message', function(data){
  $('<li>')text(data.message).appendTo('#message-log');
})

$('#chat-send').on('click', function(){
  var text = $('chat-text').text();
  socket.emit('message', {message:text});
  $('#chat-text').val('');
})
