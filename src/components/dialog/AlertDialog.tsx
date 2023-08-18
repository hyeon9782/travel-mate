import Dialog from "./Dialog";
type Props = {
  onClose: () => void;
};
const AlertDialog = ({ onClose }: Props) => {
  return (
    <Dialog>
      <div>Alert</div>
      <button onClick={onClose}>닫기</button>
    </Dialog>
  );
};

export default AlertDialog;
