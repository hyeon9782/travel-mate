import { Plan } from "../types";
import { posts } from "./index";

const fetchPlansAPI = (user_id: string, page: number) => {
  return posts.get(`/api/plan?user_id=${user_id}&page=${page}`);
};

const fetchPlanAPI = (plan_id: number) => {
  return posts.get(`api/plan/${plan_id}`);
};

const registPlanAPI = (plan: Plan) => {
  return posts.post("/api/plan", plan);
};

const modifyPlanAPI = (plan_id: number, plan: Plan) => {
  return posts.put(`/api/plan/${plan_id}`, plan);
};

const removePlanAPI = (plan_id: number) => {
  return posts.delete(`/api/plan/${plan_id}`);
};

export {
  fetchPlansAPI,
  fetchPlanAPI,
  registPlanAPI,
  modifyPlanAPI,
  removePlanAPI,
};
