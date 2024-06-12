import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import ThemePicker from "./components/ThemePicker";

function App() {
  return (
    <div className=" font-body bg-background-main h-dvh flex justify-center items-center">
      <div className=" h-full w-full max-w-[600px] p-6 sm:py-20 sm:px-9 grid grid-rows-[12fr_35fr_137fr] gap-6">
        <div className=" flex justify-between items-center">
          <h2 className=" font-bold text-display-text text-2xl">calc</h2>
          <ThemePicker />
        </div>
        <Display />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
