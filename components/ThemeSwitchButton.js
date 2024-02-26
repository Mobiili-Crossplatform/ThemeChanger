import React from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "../context/UseTheme";
import ThemeProvider from "../context/ThemeProvider";

export default function ThemeSwitchButton() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return <Switch value={isDarkMode} onValueChange={toggleDarkMode} />;
}
