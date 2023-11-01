import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#f7f8fd",
    },
    secondary: {
      main: "#ff7d1a",
      light: "#ffede0",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1d2025",
      secondary: "#68707d",
    },
  },
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",
    fontSize: 16,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
