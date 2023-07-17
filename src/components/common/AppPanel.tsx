import styled from "styled-components";
import { CloseIcon } from "./icons";

type Props = {
  handleClick: () => void;
  children: any;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
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

const IconBox = styled.div`
  font-size: 1.7rem;
  color: black;
`;

export default AppPanel;
