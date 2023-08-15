import { createContext } from "react";

export const DialogsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export const DialogsStateContext = createContext([]);
