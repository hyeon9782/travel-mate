import { atom } from "recoil";
import { Plan } from "../types";

export const planState = atom<Plan>({
  key: "planState",
  default: {
    title: "",
    plan_id: 0,
    user_id: "",
    cities: [],
    period: [String(new Date()), String(new Date())],
    selectedPlaces: [],
  },
});
