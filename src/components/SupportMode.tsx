import { crisisResources } from "../crisisResources";
import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SupportMode({ isOpen, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstFocusRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const callEmergency = () => {
    window.location.href = "tel:911";
  };

  const quickExit = () => {
    onClose();
    window.history.replaceState(null, "", window.location.href);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Support Resources
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              You are not alone. Help is available 24/7.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
            aria-label="Close support mode"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          {/* Emergency Button */}
          <button
            ref={firstFocusRef}
            onClick={callEmergency}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            🚨 Emergency: Call 911
          </button>

          {/* Crisis Resources */}
          <div className="space-y-3">
            {crisisResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-900 mb-1">
                  {resource.name}
                </h3>
                <a
                  href={`tel:${resource.phone}`}
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 block mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1"
                >
                  {resource.phone}
                </a>
                <p className="text-sm text-blue-800 mb-1">
                  {resource.description}
                </p>
                <p className="text-xs text-blue-700 italic">
                  {resource.available}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4">
            <button
              onClick={quickExit}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              ⚡ Quick Exit
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-gray-400"
            >
              Return to Journal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
