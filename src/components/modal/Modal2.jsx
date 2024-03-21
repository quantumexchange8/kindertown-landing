import React from "react";

const Modal2 = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="w-full fixed  inset-0 z-50  flex items-center justify-center bg-gray-800 bg-opacity-75  backdrop-blur-sm pt-8">
        <div className="bg-white w-[900px] p-8 rounded-[50px] h-screen ">
          <h2 className="text-2xl font-bold mb-4">Modal 2</h2>
          <p>This is the content of modal 2.</p>
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

export default Modal2;
