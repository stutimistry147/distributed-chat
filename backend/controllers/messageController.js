const handleMessage = (socket, message) => {
  console.log(`Message from ${socket.id}: ${message}`);
  socket.emit('message', { text: message, sender: socket.id });
};

module.exports = {
  handleMessage,
};
