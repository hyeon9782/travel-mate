import { atom } from "recoil";

export const planState = atom({
  key: "planState",
  default: {
    cities: [],
    period: [new Date(), new Date()],
    selectedPlaces: [
      {
        name: "",
        rating: "",
        user_rating: "",
        types: [],
        isSelect: false,
        day: 0,
        order: 0,
      },
    ],
  },
});
