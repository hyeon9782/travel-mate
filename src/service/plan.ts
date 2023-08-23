import { Plan } from "../types";
import {
  fetchPlanAPI,
  fetchPlansAPI,
  modifyPlanAPI,
  registPlanAPI,
  removePlanAPI,
} from "../api/plan";

async function createPlan(plan: Plan) {
  try {
    console.log(plan);
    const res = await registPlanAPI(plan);

    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function fetchPlans(userId: string, setPlans: any) {
  try {
    const res = await fetchPlansAPI(userId, 1);
    setPlans([...res.data]);
  } catch (err) {
    console.error(err);
  }
}

async function fetchPlan(planId: number) {
  try {
    const res = await fetchPlanAPI(planId);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function modifyPlan(plan_id: number, plan: Plan) {
  try {
    const res = await modifyPlanAPI(plan_id, plan);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function removePlan(event: MouseEvent, plan_id: number) {
  try {
    event.stopPropagation();
    const res = await removePlanAPI(plan_id);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

export { createPlan, fetchPlans, fetchPlan, modifyPlan, removePlan };
