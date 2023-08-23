import styled from "styled-components";
import Dialog from "./Dialog";
import Button from "../common/Button";
import { useState } from "react";
type Props = {
  onSubmit: (title: string) => void;
  onClose: () => void;
};
const SavePlanDialog = ({ onSubmit, onClose }: Props) => {
  const [title, setTitle] = useState("");
  const handleClickSave = () => {
    onSubmit(title);
    onClose();
  };
  const handleClickClose = () => {
    onClose();
  };
  return (
    <Dialog>
      <TitleInput
        type="text"
        placeholder="일정 제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

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
