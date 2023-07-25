import axios from "axios";
import { Plan } from "../types";

async function createPlan(plan: any) {
  try {
    console.log(plan);
    const res = await axios.post(`http://localhost:4000/api/plan`, plan);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function fetchPlan(userId: string, setPlans: any) {
  try {
    const res = await axios.get(`http://localhost:4000/api/plan/${userId}`);
    console.log(res);
    setPlans([...res.data]);
  } catch (err) {
    console.error(err);
  }
}

async function fetchPlanDetail(userId: string, planId: string) {
  try {
    const res = await axios.get(
      `http://localhost:4000/api/plan/${userId}/${planId}`
    );
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function modifyPlan(planId: string) {
  try {
    const res = await axios.put(`http://localhost:4000/api/plan/${planId}`);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function removePlan(planId: string) {
  try {
    const res = await axios.delete(`http://localhost:4000/api/plan/${planId}`);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

export { createPlan, fetchPlan, fetchPlanDetail, modifyPlan, removePlan };
