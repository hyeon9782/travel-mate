import styled from "styled-components";
import Dialog from "./Dialog";
import Button from "../common/Button";
type Props = {
  onSubmit: () => void;
  onClose: () => void;
};
const SavePlanDialog = ({ onSubmit, onClose }: Props) => {
  const handleClickSave = () => {
    onSubmit();
    onClose();
  };
  const handleClickClose = () => {
    onClose();
  };
  return (
    <Dialog>
      <TitleInput type="text" placeholder="일정 제목을 입력해주세요." />

      <ButtonBox>
        <Button text="취소" onClick={handleClickClose} />
        <Button text="저장" onClick={handleClickSave} />
      </ButtonBox>
    </Dialog>
  );
};

const TitleInput = styled.input`
  height: 30px;
  padding: 0 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export default SavePlanDialog;
