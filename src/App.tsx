import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <div style={{ position: "relative" }}>
            <Header />
            <AppRoutes />
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
