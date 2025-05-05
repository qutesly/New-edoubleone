import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#FF4B0A",
      contrastText: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4B0A",
      contrastText: "#fff",
    },
  },
});
