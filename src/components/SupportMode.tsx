import { crisisResources } from "../crisisResources";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SupportMode({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const callEmergency = () => {
    window.location.href = "tel:911";
  };

  const quickExit = () => {
    onClose();
    window.history.replaceState(null, "", window.location.href);
  };

  return (
    //Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/*Modal Content*/}
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full nx-4 p-8"
        onClick={(e) => e.stopPropagation}
      >
        {/*Header*/}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Support Resources
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            You are not alone. Help is available 24/7.
          </p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text 2xl"
            aria-label="Close support Mode"
          >
            ❌
          </button>
        </div>

        {/* Content*/}
        <div className="px-6 py-4 space-y-4">
          <button
            onClick={callEmergency}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
          >
            🚨 Emergency: Call 911
          </button>
          {/*Placeholder for crisis Resources*/}
          <div className="space-y-3">
            {crisisResources.map((resource) => (
              <div
                className="bg-blue-50 border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
                key={resource.id}
              >
                <h3 className="font-semibold text-blue-900 mb-1">
                  {resource.name}
                </h3>
                <a
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 block mb-2"
                  href={`tel:${resource.phone}`}
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

          {/*Action Buttons*/}
          <div className="space-y-2 pt-4">
            <button
              onClick={quickExit}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              💨 Quick Exit
            </button>
            <button onClick={onClose}></button>
          </div>

          {/* Quick Exit Button*/}
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Return to Journal
          </button>
        </div>
      </div>
    </div>
  );
}
