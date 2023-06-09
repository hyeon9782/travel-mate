import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: {
    location: { lat: 33.4825, lng: 126.5311 },
  },
});
