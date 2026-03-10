import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "@fontsource/geist-mono/700.css";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routers";
import { appTheme } from "./styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </StrictMode>,
)
