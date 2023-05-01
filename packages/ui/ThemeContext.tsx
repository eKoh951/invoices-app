import { createContext } from "react";

const ThemeContext = createContext({
  toggleTheme: () => {},
});

export default ThemeContext;