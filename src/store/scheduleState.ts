import { atom } from "recoil";

export const scheduleState = atom({
  key: "scheduleState",
  default: [
    [
      {
        name: "보배반점",
        rating: "4.5",
        user_total_rating: "476",
        regist: true,
      },
    ],
  ],
});
