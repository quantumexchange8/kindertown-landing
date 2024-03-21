import React from "react";

const Modal3 = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Modal 3</h2>
          <p>This is the content of modal 1.</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal3;
