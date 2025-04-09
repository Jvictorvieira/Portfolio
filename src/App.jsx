import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { useEffect, useState } from "react";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  
    const themeList = ["dark", "light", "neon","forest","cyberpunk", "dracula", "halloween"];
    const handleThemeChange = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
        document.body.classList.remove(...themeList);
        document.body.classList.add(theme);
    };

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            setTheme(theme);
            localStorage.setItem("theme", theme);
            document.body.classList.remove(...themeList);
            document.body.classList.add(theme);
        } else {
            document.body.classList.add("dark");
        }
    }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${ isLoaded ? "opacity-100": "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleThemeChange={handleThemeChange} selectedTheme={theme}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleThemeChange={handleThemeChange} selectedTheme={theme}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      
    </>
  );
}

export default App;
