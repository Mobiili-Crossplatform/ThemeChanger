import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemeProvider from "./context/ThemeProvider";
import MainAppbar from "./components/MainAppbar";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#666" barStyle="light-content" />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => (
                <MainAppbar
                  {...props}
                  backgroundColor="#666"
                  icon="cog"
                  color="#fff"
                />
              ),
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            {}
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
