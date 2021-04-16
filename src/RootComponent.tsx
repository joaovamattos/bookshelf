import "react-native-gesture-handler";
import React from "react";

import App from "../App";
import { ThemeProvider } from "./contexts/theme";
import { BooksProvider } from "./contexts/books";

const src: React.FC = () => {
  return (
    <ThemeProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </ThemeProvider>
  );
};

export default src;
