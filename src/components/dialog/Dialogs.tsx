import { useContext } from "react";
import AlertDialog from "./AlertDialog";
import ConfirmDialog from "./ConfirmDialog";
import {
  DialogsDispatchContext,
  DialogsStateContext,
} from "../../context/DialogsContext";
import SavePlanDialog from "./SavePlanDialog";

export const dialogs = {
  AlertDialog,
  ConfirmDialog,
  SavePlanDialog,
};

const Dialogs = () => {
  const openedDialogs = useContext(DialogsStateContext);
  const { close } = useContext(DialogsDispatchContext);

  return (
    <>
      {openedDialogs.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, ...restProps } = props;
        const onClose = () => {
          close(Component);
        };

        return (
          <Component
            key={index}
            {...restProps}
            onClose={onClose}
            onSubmit={onSubmit}
          />
        );
      })}
    </>
  );
};

export default Dialogs;
