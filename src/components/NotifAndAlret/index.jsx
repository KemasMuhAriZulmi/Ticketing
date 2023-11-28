import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
  return (
    <div className="bg-green-500 text-white p-2 rounded mb-2">
      {message}
    </div>
  );
};

const Notifications = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulasi penerimaan pesan/notifikasi
    const newMessage = 'Pengguna lain menyukai postingan Anda.';
    setMessages([...messages, newMessage]);

    // Hapus pesan setelah 5 detik
    const timeout = setTimeout(() => {
      setMessages(messages.filter(msg => msg !== newMessage));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <div>
      <h1>Notifikasi</h1>
      {messages.map((message, index) => (
        <Notification key={index} message={message} />
      ))}
    </div>
  );
};

export default Notifications;
