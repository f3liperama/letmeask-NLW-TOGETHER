import { createContext, ReactNode, useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

type Theme = {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
	backgroundTextArea: string;
    textPrimary: string;
	textSecondary: string;
	headerSeparator: string;
  };
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const storageTheme = localStorage.getItem("letmeask@theme");

    if (!storageTheme) {
      return light;
    }

    return storageTheme === "light" ? light : dark;
  });

  useEffect(() => {
    console.log(JSON.stringify(currentTheme));
    localStorage.setItem("letmeask@theme", currentTheme.title);
  }, [currentTheme]);

  function toggleTheme() {
    setCurrentTheme(currentTheme.title === "light" ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
