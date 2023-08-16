import { ComponentType, useContext } from "react";
import { DialogsDispatchContext } from "../context/DialogsContext";

const useDialogs = () => {
  const { open, close } = useContext(DialogsDispatchContext);
  const openDialog = (Component: ComponentType<any>, props: any) => {
    open(Component, props);
  };
  const closeDialog = (Component: ComponentType<any>) => {
    close(Component);
  };

  return {
    openDialog,
    closeDialog,
  };
};

export default useDialogs;
