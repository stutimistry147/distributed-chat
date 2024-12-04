// References to DOM elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Handle sending messages
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display the sent message
        const sentMessage = document.createElement('div');
        sentMessage.className = 'message sent';
        sentMessage.textContent = message;
        messagesDiv.appendChild(sentMessage);

        // Scroll to the bottom of the messages container
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Clear the input field
        messageInput.value = '';

        // Simulate a response from another user (replace with backend integration)
        setTimeout(() => {
            const receivedMessage = document.createElement('div');
            receivedMessage.className = 'message received';
            receivedMessage.textContent = 'This is a simulated reply!';
            messagesDiv.appendChild(receivedMessage);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
    }
});
