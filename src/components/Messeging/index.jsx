import React, { useState } from 'react';

const Message = ({ sender, content }) => {
  return (
    <div className="mb-2">
      <strong>{sender}:</strong> {content}
    </div>
  );
};

const Messaging = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'pengguna1', content: 'Halo, apa kabar?' },
    { id: 2, sender: 'pengguna2', content: 'Hai! Kabarku baik.' },
    // ... Tambahkan data pesan lainnya
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Kirim pesan ke pengguna lain atau lakukan tindakan sesuai kebutuhan
    console.log('Pesan yang akan dikirim:', newMessage);
    // Bersihkan input setelah mengirim pesan
    setNewMessage('');
  };

  return (
    <div>
      <div className="mb-4">
        {messages.map(message => (
          <Message key={message.id} sender={message.sender} content={message.content} />
        ))}
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Ketik pesan..."
        rows="4"
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Kirim Pesan
      </button>
    </div>
  );
};

export default Messaging;
