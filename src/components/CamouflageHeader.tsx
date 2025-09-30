import { useRef } from "react";

const LONG_MS = 1200;

type Props = { onLongPress: () => void };

export default function CamouflageHeader({ onLongPress }: Props) {
  const timer = useRef<number | null>(null);

  const startLongPress = () => {
    if (timer.current != null) return;

    timer.current = window.setTimeout(() => {
      timer.current = null;
      onLongPress();
    }, LONG_MS);
  };

  const cancelLongPress = () => {
    if (timer.current != null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  };
  return (
    <header
      className="bg-green-50 border -b border-green-100 px-6 py-4"
      //touch events for the Desktop
      onMouseDown={startLongPress}
      onMouseUp={cancelLongPress}
      onMouseLeave={cancelLongPress}
      // touch events for Mobile
      onTouchStart={startLongPress}
      onTouchEnd={cancelLongPress}
      onTouchCancel={cancelLongPress}
      //accessibilty
      role="banner"
      aria-label="Daily Bloom"
    >
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🌱</span>
          <h1 className="text-xl font-medium text-gray-800">Daily Bloom</h1>
        </div>

        <div className="text-sm-text-gray-500 hidden sm:block">
          Your wellness space
        </div>
      </div>
    </header>
  );
}
