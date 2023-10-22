import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/GlobalStyles.tsx";
import React from "react";
import DialogsProvider from "./provider/DialogsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DialogsProvider>
      <GlobalStyle />
      <App />
    </DialogsProvider>
  </React.StrictMode>
);
