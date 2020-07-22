const socket = io();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('msg').value;
  if (!message) return false;
  socket.emit('chat message', message);
  document.getElementById('msg').value = '';
  return false;
});

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.innerHTML = msg;
  div.classList.add('chat-message')
  document.getElementById('messages').append(div);
  div.scrollIntoView();
})

// TODO: agregar nicknames
