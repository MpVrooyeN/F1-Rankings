import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e22420",
      contrastText: "#000",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Titllium",
  },
});
