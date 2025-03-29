import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadScreen";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${ isLoaded ? "opacity-100": "opacity-0"}`}>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
