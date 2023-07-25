import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import PlanDetailPage from "../pages/PlanDetailPage";
import PlanPage from "../pages/PlanPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan" element={<PlanPage />} />
      <Route path="/plan/:id" element={<PlanDetailPage />} />
      <Route path="/plan/edit/:id" element={<PlanPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
