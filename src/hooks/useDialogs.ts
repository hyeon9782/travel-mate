import { useContext } from "react";
import { DialogsDispatchContext } from "../context/DialogsContext";

const useDialogs = () => {
  const { open, close } = useContext(DialogsDispatchContext);
  const openDialog = (Component, props) => {
    open(Component, props);
  };
  const closeDialog = (Component) => {
    close(Component);
  };

  return {
    openDialog,
    closeDialog,
  };
};

export default useDialogs;
