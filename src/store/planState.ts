import { atom } from "recoil";
import { Plan } from "../types";

export const planState = atom<Plan>({
  key: "planState",
  default: {
    plan_id: 0,
    user_id: "",
    cities: [],
    period: [String(new Date()), String(new Date())],
    selectedPlaces: [
      // {
      //   place_id: "",
      //   name: "",
      //   user_ratings_total: "",
      //   rating: "",
      //   geometry: {
      //     location: {
      //       lat: 214254,
      //       lng: 3215213,
      //     },
      //   },
      //   types: [],
      //   isSelect: false,
      //   day: 0,
      //   order: 0,
      // },
    ],
  },
});
