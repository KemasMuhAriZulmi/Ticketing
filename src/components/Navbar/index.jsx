import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="mr-4" />
        <ul className="flex space-x-4">
          <li><a href="/">Beranda</a></li>
          <li><a href="/profil">Profil</a></li>
          <li><a href="/pesan">Pesan</a></li>
          {/* ... Tambahkan tautan menu lainnya sesuai kebutuhan */}
        </ul>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="Cari..." className="mr-4 p-2 rounded" />
        {/* ... Tambahkan ikon pesan, pemberitahuan, dll. */}
      </div>
    </nav>
  );
};

export default Navbar;
