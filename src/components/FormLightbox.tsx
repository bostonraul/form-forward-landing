import React, { useState } from "react";
import { GearSubmissionForm } from "./GearSubmissionForm";

const FormLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-primary/90 transition"
      >
        Share Your Gear
      </button>

      {/* Modal Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl relative shadow-xl">
            <button
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <GearSubmissionForm />
          </div>
        </div>
      )}
    </>
  );
};

export default FormLightbox;
