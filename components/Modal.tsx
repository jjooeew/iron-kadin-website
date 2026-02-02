import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar frosted rounded-3xl border border-white/10 shadow-2xl pb-12">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-3 md:right-3 z-50 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-acid-lime hover:border-acid-lime/50 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {children}
      </div>
    </div>
  );
}
