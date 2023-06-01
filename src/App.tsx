import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
