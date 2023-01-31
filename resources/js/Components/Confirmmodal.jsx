import React, { useState } from 'react';

const ConfirmationModal = ({ children, onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  return (
    <div className="relative">
      <button className="btn btn-primary" onClick={handleOpen}>
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 z-50">
          <div className="max-w-sm m-auto p-6 bg-white rounded-lg shadow-xl">
            {children}
            <div className="flex justify-end mt-4">
              <button
                className="btn btn-primary mr-2"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button className="btn btn-danger" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationModal;
