// src/LightboxForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './LightboxForm.css'; // Add this line at the top of the file

// Set the app element for accessibility
Modal.setAppElement('#root');

const LightboxForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal}>Open Form</button>

      {/* Modal Component */}
      <Modal
        isOpen={isOpen}           // Controls if the modal is open or not
        onRequestClose={closeModal} // Function to close modal when requested
        contentLabel="Form Lightbox"
        className="modal"         // Custom class for styling
        overlayClassName="overlay" // Custom class for overlay styling
      >
        <h2>Form Title</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default LightboxForm;
