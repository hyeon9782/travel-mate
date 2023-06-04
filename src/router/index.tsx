import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlanPage from "../pages/PlanPage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan" element={<PlanPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
