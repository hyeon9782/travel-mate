import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import GlobalStyle from "./styles/GlobalStyles.tsx";
import React from "react";
import DialogsProvider from "./provider/DialogsProvider.tsx";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log("onError", error);
    },
    onSuccess: (data) => {
      console.log("onSuccess", data);
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 호출할 것인지
      retry: 0, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
    },
  },
});

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
