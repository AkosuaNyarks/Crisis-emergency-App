import CamouflageHeader from "./components/CamouflageHeader.tsx";

export default function App() {
  function handleOnLongPress() {
    console.log("long press detected");
  }

  return <CamouflageHeader onLongPress={handleOnLongPress} />;
}
