import React, { ReactNode, useMemo, useState } from "react";
import {
  DialogsDispatchContext,
  DialogsStateContext,
} from "../context/DialogsContext";
type Props = {
  children: ReactNode;
};
const DialogsProvider = ({ children }: Props) => {
  const [openedDialogs, setOpenedDialogs] = useState([]);
  const open = (Component, props) => {
    setOpenedDialogs((dialogs) => {
      return [...dialogs, { Component, props }];
    });
  };
  const close = (Component) => {
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
        <Modals />
      </DialogsDispatchContext.Provider>
    </DialogsStateContext.Provider>
  );
};

export default DialogsProvider;
