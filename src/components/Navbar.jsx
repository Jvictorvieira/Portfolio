import { useEffect, useState, useRef } from "react";
import { themesList } from "../utils/themes";
import { ThemeButton } from "./ThemeButton";
import { portfolioInfo } from "../utils/portfolio";
export const Navbar = ({
  menuOpen,
  setMenuOpen,
  handleThemeChange,
  selectedTheme,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const hasProjects = portfolioInfo.projects.length > 0;
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when selecting a theme
  const handleThemeSelection = (theme) => {
    handleThemeChange(theme);
    setDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-40 bg-navbar backdrop-blur-lg border-b border-border shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-copy-primary"
          >
            JV<span className="text-highlight">.DEV</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-copy-primary"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-copy-primary hover:text-cta transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-copy-primary hover:text-cta transition-colors"
            >
              About
            </a>
            { hasProjects && <a
              href="#projects"
              className="text-copy-primary hover:text-cta transition-colors"
            >
              Projects
            </a>}
            <a
              href="#contact"
              className="text-copy-primary hover:text-cta transition-colors"
            >
              Contact
            </a>
          </div>
          <div
            className="hidden md:inline-block relative  text-left"
            ref={dropdownRef}
          >
            <a
              className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-copy-primary hover:text-cta focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cursor-pointer"
              type="button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Themes
            </a>
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-navbar/50 focus:outline-none z-50">
                <div
                  className="py-2 space-y-2 px-4"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {themesList.map((element) => (
                    <div key={element.name}>
                      <ThemeButton
                        theme={element}
                        selectedTheme={selectedTheme}
                        handleThemeSelection={handleThemeSelection}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
