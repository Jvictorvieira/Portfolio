export const ThemeButton = ({ theme, selectedTheme, handleThemeSelection, handleMenuMobile}) => {
  return (
    <div
      
      className="w-full flex items-center justify-between  px-4 py-2 text-sm border hover:text-highlight cursor-pointer rounded-lg"
      style={{
        backgroundColor: theme.background.hex,
        color: theme["copy-primary"].hex,
        borderColor: theme.border.hex,
      }}
      onClick={() => {
        handleThemeSelection(theme.name.toLowerCase())
        handleMenuMobile && handleMenuMobile()
      }}
      
    >
      {theme.name.toLowerCase() === selectedTheme ? (
        <div>
          <span className="mr-2 text-highlight">✔</span> {theme.name}
        </div>
        
      ) : (
        <div>
          <span className="mr-2 invisible">✔</span> {theme.name}
        </div>
      )}
      
      <div className="flex space-x-1 mr-3 md:flex hidden">
        <span
          className="w-2 h-6 rounded-full"
          style={{ backgroundColor: theme.border.hex }}
        ></span>
        <span
          className="w-2 h-6 rounded-full"
          style={{ backgroundColor: theme["copy-primary"].hex }}
        ></span>
        <span
          className="w-2 h-6 rounded-full"
          style={{
            backgroundColor: theme.cta.hex,
          }}
        ></span>
        <span
          className="w-2 h-6 rounded-full"
          style={{ backgroundColor: theme.highlight.hex }}
        ></span>
      </div>
    </div>
  );
};
