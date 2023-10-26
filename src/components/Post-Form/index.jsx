import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreatePost = () => {
    const newPost = {
      content: content,
      // Tambahkan properti lain sesuai kebutuhan
    };

    axios
      .post('http://localhost:3001/posts', newPost)
      .then((response) => {
        // Tanggapan sukses
        console.log('Postingan berhasil ditambahkan:', response.data);

        // Reset form atau lakukan navigasi ke halaman beranda, jika diperlukan
      })
      .catch((error) => {
        // Tanggapan gagal
        console.error('Gagal menambahkan postingan:', error);

        // Tambahkan logika atau notifikasi untuk penanganan kesalahan
      });
  };

  return (
    <div>
      <h1>Buat Postingan</h1>
      <textarea
        placeholder="Tulis postingan Anda..."
        value={content}
        onChange={handleContentChange}
        rows={4}
        cols={50}
      />
      <button onClick={handleCreatePost}>Buat Postingan</button>
    </div>
  );
};

export default CreatePost;