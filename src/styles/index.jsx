import { createTheme } from "@mui/material";

export const theme = createTheme({
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
    divider: "#f7f8fd",
  },
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",
    fontSize: 16,
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: () => ({ borderBottomWidth: "2px" }),
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
});
