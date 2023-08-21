import { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode;
};
const Dialog = ({ children }: Props) => {
  return (
    <DialogBackground>
      <DialogBlock>{children}</DialogBlock>
    </DialogBackground>
  );
};

const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const DialogBlock = styled.article`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export default Dialog;
