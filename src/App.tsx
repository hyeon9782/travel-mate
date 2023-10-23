import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/layout/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <AppRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
