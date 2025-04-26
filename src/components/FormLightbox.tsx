import React from "react";
import { GearSubmissionForm } from "./GearSubmissionForm";

interface FormLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  ctaClicked: string | null;
}

const FormLightbox: React.FC<FormLightboxProps> = ({ isOpen, onClose, ctaClicked }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl relative shadow-xl">
        <button
          className="absolute top-3 right-4 text-3xl text-gray-700 hover:text-red-500 bg-white/80 rounded-full z-50"
          onClick={onClose}
        >
          ×
        </button>
        <GearSubmissionForm ctaClicked={ctaClicked} />
      </div>
    </div>
  );
};

export default FormLightbox;
