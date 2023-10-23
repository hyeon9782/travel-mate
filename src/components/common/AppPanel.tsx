import styled from "styled-components";
import { CloseIcon } from "./icons";
import { ReactNode } from "react";

type Props = {
  handleClick: () => void;
  children: ReactNode;
};

const AppPanel = ({ handleClick, children }: Props) => {
  return (
    <AppPanelBlock>
      <AppPanelBox>
        <IconBox onClick={handleClick}>
          <CloseIcon />
        </IconBox>
        <ContentBox>{children}</ContentBox>
      </AppPanelBox>
    </AppPanelBlock>
  );
};

const AppPanelBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  z-index: 5;
  overflow: hidden; // 여기에 추가
`;

const AppPanelBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 85%;
  height: 100%;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
`;

const ContentBox = styled.div``;

const IconBox = styled.span`
  font-size: 1.7rem;
  color: black;
`;

export default AppPanel;
