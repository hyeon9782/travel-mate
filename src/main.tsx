import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "./styles/GlobalStyles.tsx";
import React from "react";
import DialogsProvider from "./provider/DialogsProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DialogsProvider>
        <GlobalStyle />
        <App />
      </DialogsProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
