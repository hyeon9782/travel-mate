import axios from "axios";

async function createPlan() {
  try {
    const res = await axios.post(`http://localhost:4000/api/plan`);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function fetchPlan() {
  try {
    const res = await axios.get(`http://localhost:4000/api/plan`);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function modifyPlan() {
  try {
    const res = await axios.patch(`http://localhost:4000/api/plan`);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

async function removePlan() {
  try {
    const res = await axios.delete(`http://localhost:4000/api/plan`);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

export { createPlan, fetchPlan, modifyPlan, removePlan };
