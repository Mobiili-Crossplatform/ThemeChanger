import React from "react";
import { View } from "react-native";
import Styles from "../Styles";
import { useTheme } from "../context/UseTheme";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import ThemeProvider from "../context/ThemeProvider";

export default function Settings() {
  const { isDarkMode } = useTheme();

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      
      <ThemeSwitchButton />
    </View>
  );
}
