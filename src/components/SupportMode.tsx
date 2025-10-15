type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SupportMode({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

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
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text 2xl"
            aria-label="Close support Mode"
          >
            ❌
          </button>
        </div>

        {/* Content*/}
        <div className="space-y-4">
          <p className="text-gray-600">You are not alone. Help is available</p>
          {/*Placeholder for crisis Resources*/}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">
              National Crisis Hotline
            </h3>
            <p className="text-blue-800 text-lg font-semibold">988</p>
            <p className="text-sm text-blue-700 mt-1">
              Available 24/7 - Free and confidential
            </p>
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
