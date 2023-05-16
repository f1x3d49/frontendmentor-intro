import Navbar from "./components/Navbar";
import { ReactComponent as Audiophile } from "./images/client-audiophile.svg";
import { ReactComponent as Databiz } from "./images/client-databiz.svg";
import { ReactComponent as Meet } from "./images/client-meet.svg";
import { ReactComponent as Maker } from "./images/client-maker.svg";

function App() {
  return (
    <div className="w-screen h-screen bg-awhite md:px-8 font-main">
      <Navbar />
      <div className="flex flex-col items-center gap-4">
        <div className="w-screen h-80  bg-center bg-mobile bg-cover"></div>
        <div className="px-8 text-center">
          <h1 className="font-extrabold text-4xl text-ablack mb-4">
            Make remote work
          </h1>
          <p className="text-[18px] text-mgray font-medium mb-4">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <button className="bg-ablack text-awhite w-1/2 h-12 rounded-xl font-extrabold mb-10">
          Learn more
        </button>
        <div className="flex justify-center gap-4">
          <Audiophile />
          <Databiz />
          <Meet />
          <Maker />
        </div>
      </div>
    </div>
  );
}

export default App;
