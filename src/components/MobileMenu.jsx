import { themesList } from "../utils/themes";
import { ThemeButton } from "./ThemeButton";
export const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  handleThemeChange,
  selectedTheme,
}) => {
  return (
    <div
      className={`fixed top-0 w-full bg-navbar z-40 flex flex-col items-center justify-center
         transition-all duration-300 ease-in-out 
         ${
           menuOpen
             ? "h-screen opacity-100 pointer-events-auto"
             : "h-0 opacity-0 pointer-events-none"
         }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-copy-primary text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-copy-primary my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0 "
                        : "opacity-0 translate-y-5"
                    }
                `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-copy-primary my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0 "
                    : "opacity-0 translate-y-5"
                }
            `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-copy-primary my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0 "
                    : "opacity-0 translate-y-5"
                }
            `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-copy-primary my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0 "
                    : "opacity-0 translate-y-5"
                }
            `}
      >
        Contact
      </a>
      <div className="py-2 space-y-2 text-center">
        <div
          className={`text-2xl font-semibold text-copy-primary my-4 transform transition-transform duration-300
              ${
                menuOpen
                  ? "opacity-100 translate-y-0 "
                  : "opacity-0 translate-y-5"
              }
          `}
        >
          Select Theme
        </div>
        {themesList.map((theme) => (
          <div key={theme.name}>
            <ThemeButton
              theme={theme}
              selectedTheme={selectedTheme}
              handleThemeSelection={handleThemeChange}
              handleMenuMobile={() => setMenuOpen(false)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
