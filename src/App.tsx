import { useState, useEffect } from "react";
import CamouflageHeader from "./components/CamouflageHeader.tsx";
import JournalInterface from "./components/JournalInterface.tsx";
import SupportMode from "./components/SupportMode.tsx";

export default function App() {
  const [isSupportModeOpen, setIsSupportModeOpen] = useState(false);

  function handleOnLongPress() {
    console.log("Opening Support Mode");
    setIsSupportModeOpen(true);
  }

  function closeSupportMode() {
    console.log("Closing Support Mode");
    setIsSupportModeOpen(false);
  }

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === ".") {
        event.preventDefault();
        handleOnLongPress();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <CamouflageHeader onLongPress={handleOnLongPress} />
      <JournalInterface />
      <SupportMode isOpen={isSupportModeOpen} onClose={closeSupportMode} />
    </div>
  );
}
