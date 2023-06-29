import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "./styles/GlobalStyles.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>
  // </React.StrictMode>
);
