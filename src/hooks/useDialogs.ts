import { useContext } from "react";
import { DialogsDispatchContext } from "../context/DialogsContext";

const useDialogs = () => {
  const { open, close } = useContext(DialogsDispatchContext);
  const openDialog = (Component: any, props: any) => {
    open(Component, props);
  };
  const closeDialog = (Component: any) => {
    close(Component);
  };

  return {
    openDialog,
    closeDialog,
  };
};

export default useDialogs;
