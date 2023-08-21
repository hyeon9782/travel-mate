import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import PlanDetailPage from "../pages/PlanDetailPage";
import PlanPage from "../pages/PlanPage";
import PostPage from "../pages/PostPage";
import PostEditPage from "../pages/PostEditPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan" element={<PlanPage />}>
        <Route path=":id" element={<PlanDetailPage />} />
        <Route path="edit/:id" element={<PlanPage />} />
      </Route>
      <Route path="/post" element={<PostEditPage />}>
        <Route path=":id" element={<PostPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
