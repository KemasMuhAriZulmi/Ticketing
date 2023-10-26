import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white p-6 rounded z-10">
        {children}
      </div>
    </div>
  );
};

const PopUpExample = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup} className="bg-blue-500 text-white px-4 py-2 rounded">
        Buka Pop-up
      </button>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <h2>Ini adalah isi dari pop-up</h2>
        <button onClick={handleClosePopup} className="bg-red-500 text-white px-4 py-2 rounded">
          Tutup Pop-up
        </button>
      </Popup>
    </div>
  );
};

export default PopUpExample;
