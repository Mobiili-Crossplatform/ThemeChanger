import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeProvider from "./ThemeProvider";

export const useTheme = () => {
    return useContext(ThemeContext);
}
