import CamouflageHeader from "./components/CamouflageHeader.tsx";
import JournalInterface from "./components/JournalInterface.tsx";

export default function App() {
  function handleOnLongPress() {
    console.log("long press detected");
  }

  return (
    <div className="h-screen flex flex-col">
      <CamouflageHeader onLongPress={handleOnLongPress} />
      <JournalInterface />
    </div>
  );
}
