import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedDarkMode = localStorage.getItem("isDarkMode");
  const [isDarkMode, setDarkMode] = useState<boolean>(storedDarkMode === "true");

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem("isDarkMode", checked.toString());
  };

  useEffect(() => {
    console.log("Modo escuro ativado?", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
