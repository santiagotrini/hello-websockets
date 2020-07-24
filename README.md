# Hello websockets

Una aplicación de chat usando [WebSockets](https://developer.mozilla.org/es/docs/Web/API/WebSockets_API) y NodeJS. Basado en el [tutorial de Socket.IO](https://socket.io/get-started/chat). Demo en [la35chat.herokuapp.com](https://la35chat.herokuapp.com/).

## Qué vamos a hacer

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Sockets

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Creando el proyecto

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```console
$ mkdir hello-websockets
$ cd hello-websockets
$ npm init -y
$ git init
$ echo node_modules > .gitignore
$ echo web: npm start > Procfile
$ touch index.js
$ mkdir public
$ mkdir public/scripts
$ mkdir public/styles
$ touch public/index.html
$ touch public/scripts/chat.js
$ touch public/styles/style.css
$ npm i express socket.io
$ npm i -D nodemon
```

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## El server

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js
const express = require('express');
const app     = express();
const http    = require('http').createServer(app);
const io      = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## El cliente

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### La UI

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Google fonts -->
     <link href="https://fonts.googleapis.com/css2?family=Knewave&display=swap" rel="stylesheet">
     <!-- Titulo -->
    <title>la35chat</title>
  </head>
  <body>
    <!-- Top level container -->
    <div class="container">
      <!-- Header -->
      <div class="header">
        <span>la35chat</span>
        <input id="nick" size="10" class="nick-input" placeholder="Nombre *" value="" autocomplete="off">
      </div>
      <!-- Messages container -->
      <div class="messages" id="messages"></div>
      <!-- Message form -->
      <form id="form" class="form" action="">
        <input id="msg" class="" autocomplete="off" placeholder="Mensaje">
        <button class=""><i class="fa fa-paper-plane"></i></button>
      </form>
    </div>
    <!-- JavaScript -->
    <script src="/socket.io/socket.io.js"></script>
    <script type="text/javascript" src="scripts/chat.js"></script>
  </body>
</html>
```

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Un poco de diseño

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```css
html, body {
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  position: fixed;
}

.container {
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: auto;
  background-color: black;
  font-family: 'Knewave', cursive;
  color: white;
  padding: 12px 12px;
  font-size: 24px;
}

.messages {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-bottom: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.messages::-webkit-scrollbar {
  display: none;
}

.form {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

input, button {
  margin: 0.1em;
  font-size: 16px;
}

button {
  padding: 5px 15px;
  color: white;
  background-color: teal;
  text-align: center;
  border: none;
  border-radius: 5px;
}

.nick-input {
  background: transparent;
  border: none;
  color: white;
  border-bottom: 1px solid #ccc;
  margin-left: auto;
}

#msg {
  background: transparent;
  border: none;
  color: black;
  border-bottom: 1px solid #888;
  flex-grow: 1;
  margin-right: 15px;
}

.chat-message, .sent-message {
  display: inline-block;
  font-size: 16px;
  margin: 0.4em;
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  line-height: 1.8em;
}

.chat-message {
  background-color: gainsboro;
}

.sent-message {
  background-color: lightsteelblue;
  align-self: flex-end;
}

.nick {
  font-weight: bold;
}
```

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Agregamos JavaScript

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```js
const socket = io();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('msg').value;
  if (!message) return false;
  const nick = document.getElementById('nick').value;
  if (!nick) return false;
  const chatMessage = {
    nick: nick,
    text: message
  };
  socket.emit('chat message', chatMessage);
  // clear input
  document.getElementById('msg').value = '';
  // put message for sender
  const div = document.createElement('div');
  const nickText = document.createElement('span');
  const messageText = document.createElement('span');
  nickText.classList.add('nick');
  nickText.innerHTML = nick;
  messageText.innerHTML = message;
  div.append(nickText);
  div.append(document.createElement('br'));
  div.append(messageText);
  div.classList.add('sent-message');
  document.getElementById('messages').append(div);
  div.scrollIntoView();
  return false;
});

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  const nick = document.createElement('span');
  const message = document.createElement('span');
  nick.classList.add('nick');
  nick.innerHTML = msg.nick;
  message.innerHTML = msg.text;
  div.append(nick);
  div.append(document.createElement('br'));
  div.append(message);
  div.classList.add('chat-message');
  document.getElementById('messages').append(div);
  div.scrollIntoView();
});
```

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## ¿Y ahora?

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
