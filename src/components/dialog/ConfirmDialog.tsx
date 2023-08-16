import styled from "styled-components";
import Dialog from "./Dialog";
type Props = {
  onSubmit: (value: any) => void;
  onClose: () => void;
  content: string;
  title: string;
};
const ConfirmDialog = ({ onSubmit, onClose, content, title }: Props) => {
  const handleClickSubmit = async () => {
    onSubmit("my-value");
    onClose();
  };

  const handleClickCancel = () => {
    onClose();
  };
  return (
    <Dialog>
      <ConfirmBlock>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <button onClick={handleClickCancel}>닫기</button>
        <button onClick={handleClickSubmit}>확인</button>
      </ConfirmBlock>
    </Dialog>
  );
};

const ConfirmBlock = styled.div`
  .title {
    font-weight: bold;
  }
`;

export default ConfirmDialog;
