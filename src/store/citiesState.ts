import { atom } from "recoil";
import { CITIES } from "../constants/cities";

export const citiesState = atom({
  key: "citiesState",
  default: [...CITIES],
});
