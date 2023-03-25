import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { customTheme } from "./themes/CustomTheme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const queryClient = new QueryClient({});

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
