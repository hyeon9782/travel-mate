import { ReactNode, useMemo, useState } from "react";
import {
  DialogsDispatchContext,
  DialogsStateContext,
} from "../context/DialogsContext";
import Dialogs from "../components/dialog/Dialogs";
type Props = {
  children: ReactNode;
};
const DialogsProvider = ({ children }: Props) => {
  const [openedDialogs, setOpenedDialogs] = useState<any>([]);
  const open = (Component: any, props: any) => {
    setOpenedDialogs((dialogs) => {
      return [...dialogs, { Component, props }];
    });
  };
  const close = (Component: any) => {
    setOpenedDialogs((dialogs) => {
      return dialogs.filter((dialog) => {
        return dialog.Component !== Component;
      });
    });
  };
  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <DialogsStateContext.Provider value={openedDialogs}>
      <DialogsDispatchContext.Provider value={dispatch}>
        {children}
        <Dialogs />
      </DialogsDispatchContext.Provider>
    </DialogsStateContext.Provider>
  );
};

export default DialogsProvider;
