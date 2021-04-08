import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import { useTheme } from "./src/contexts/theme";
import Routes from "./src/routes";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return null;

  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar
        backgroundColor={theme.colors.background}
        style={theme.title === "light" ? "dark" : "light"}
      />
    </ThemeProvider>
  );
};

export default App;
