import styled from "styled-components";
import Dialog from "./Dialog";
import Button from "../common/Button";
type Props = {
  onSubmit?: (value: any) => void;
  onRedirect?: () => void;
  onClose: () => void;
  content: string;
  title: string;
};
const ConfirmDialog = ({
  onSubmit,
  onClose,
  onRedirect,
  content,
  title,
}: Props) => {
  const handleClickSubmit = async () => {
    onSubmit && onSubmit("my-value");
    onClose();
  };

  const handleClickCancel = () => {
    onRedirect && onRedirect();
    onClose();
  };
  return (
    <Dialog>
      <ConfirmBlock>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="button-box">
          <Button text="닫기" onClick={handleClickCancel} />
          <Button text="확인" onClick={handleClickSubmit} />
        </div>
      </ConfirmBlock>
    </Dialog>
  );
};

const ConfirmBlock = styled.div`
  .title {
    font-weight: bold;
  }

  .content {
    padding: 10px 0;
  }

  .button-box {
    display: flex;
    justify-content: space-around;
  }
`;

export default ConfirmDialog;
