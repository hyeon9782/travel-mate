import { createContext } from "react";
import { Dialog, DialogsContextType } from "../types";

export const DialogsDispatchContext = createContext<DialogsContextType>({
  open: () => {},
  close: () => {},
});

export const DialogsStateContext = createContext<Dialog[]>([]);
