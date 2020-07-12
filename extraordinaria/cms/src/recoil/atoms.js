import { atom } from "recoil";

export const bodyState = atom({
  key: "bodyState",
  default: "",
});

export const sessionState = atom({
  key: "sessionState",
  default: { userid: "", token: "", logged: false },
});
