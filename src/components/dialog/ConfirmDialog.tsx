import Dialog from "./Dialog";
type Props = {
  onSubmit: () => void;
  onClose: () => void;
};
const ConfirmDialog = ({ onSubmit, onClose }: Props) => {
  const handleClickSubmit = async () => {
    onSubmit("my-value");
    onClose();
  };

  const handleClickCancel = () => {
    onClose();
  };
  return (
    <Dialog>
      <div>Confirm</div>
      <button onClick={handleClickCancel}>닫기</button>
      <button onClick={handleClickSubmit}>확인</button>
    </Dialog>
  );
};

export default ConfirmDialog;
