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

async function fetchPlan(userId: string, setPlans: any) {
  try {
    const res = await fetchPlansAPI(userId);
    console.log(res);
    setPlans([...res.data]);
  } catch (err) {
    console.error(err);
  }
}

async function fetchPlanDetail(planId: number, setPlan: any) {
  try {
    console.log("여기");

    const res = await fetchPlanAPI(planId);
    console.log(res);
    setPlan({ ...res.data });
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

export { createPlan, fetchPlan, fetchPlanDetail, modifyPlan, removePlan };
