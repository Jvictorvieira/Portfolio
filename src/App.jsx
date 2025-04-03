import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { useEffect, useState } from "react";

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
        <div className="flex flex-col items-center justify-center h-screen">
           
        </div>
      </div>
      
    </>
  );
}

export default App;
