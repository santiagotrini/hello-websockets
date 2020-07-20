const socket = io();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('msg').value;
  socket.emit('chat message', message);
  document.getElementById('msg').value = '';
  return false;
});

socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.innerHTML = msg;
  document.getElementById('messages').append(li);
})

// TODO: agregar nicknames
// TODO: usar Bootstrap
// TODO: agregar
