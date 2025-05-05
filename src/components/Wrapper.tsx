"use client";

import client from "@/api/client";
import { useAppSelector } from "@/redux/store";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";

function Wrapper({ children }: any) {
  const { token } = useAppSelector((s) => s.auth);
  useEffect(() => {
    if (token) {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      client.defaults.headers.common["Authorization"] = undefined;
    }
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider />
      {children}
    </ThemeProvider>
  );
}
export default Wrapper;
