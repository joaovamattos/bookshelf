import "react-native-gesture-handler";
import React from "react";

import App from "../App";
import { ThemeProvider } from "./contexts/theme";

const src: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default src;
