import React from 'react';

const PostList = () => {
  const posts = [
    {
      id: 1,
      content: "Isi konten post 1",
    },
    {
      id: 2,
      content: "Isi konten post 2",
    },
    // ... Tambahkan data post lainnya
  ];

  return (
    <div>
      <h1>Daftar Post</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.content}</p>
            {/* ... Tambahkan gambar atau video jika diperlukan */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
