import { selectorFamily } from "recoil";
import { fetchPlan } from "../service/plan";

export const planSelector = selectorFamily({
  key: "planSelector",
  get: (plan_id: number) => async () => {
    return await fetchPlan(plan_id);
  },
});
