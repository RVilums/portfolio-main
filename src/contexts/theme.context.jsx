import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeChange, setThemeChange] = useState(false);

  const changeThemeHandler = () => {
    setThemeChange((prevState) => !prevState);
  };

  const contextValue = {
    changeThemeHandler,
    themeChange,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
