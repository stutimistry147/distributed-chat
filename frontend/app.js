const socket = io(); // Connect to the backend

const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Append a message to the messages div
function appendMessage(message, isMine) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.style.textAlign = isMine ? 'right' : 'left';
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}

// Handle new messages from the backend
socket.on('message', (data) => {
  appendMessage(data, false);
});

// Send a message to the backend
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  appendMessage(message, true);
  socket.emit('message', message); // Emit the message to the server
  messageInput.value = '';
});
