import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlanPage from "../pages/PlanPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan" element={<PlanPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
