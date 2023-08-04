import { atom } from "recoil";
import { Place } from "../types";

export const searchPlacesState = atom<Place[]>({
  key: "searchPlacesState",
  default: [],
});
