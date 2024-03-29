import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import PlanDetailPage from "../pages/PlanDetailPage";
import PlanPage from "../pages/PlanPage";
import PostPage from "../pages/PostPage";
import PostEditPage from "../pages/PostEditPage";
import PlanEditPage from "../pages/PlanEditPage";
import PostNewPage from "../pages/PostNewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan" element={<PlanPage />} />
      <Route path="/plan/:id" element={<PlanDetailPage />} />
      <Route path="/plan/edit/:id" element={<PlanEditPage />} />
      <Route path="/post/edit/:id" element={<PostEditPage />} />
      <Route path="/post/new" element={<PostNewPage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
