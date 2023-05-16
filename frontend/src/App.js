import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-awhite md:px-8 font-main">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
