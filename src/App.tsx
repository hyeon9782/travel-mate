import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/layout/Header";
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
