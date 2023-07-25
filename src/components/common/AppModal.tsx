import styled from "styled-components";

type Props = {
  children: any;
  isModal: boolean;
  close: () => void;
};
const AppModal = ({ children, isModal, close }: Props) => {
  return (
    <>
      {isModal && (
        <ModalBackground>
          <ModalBox>
            <ModalHead onClick={close}>X</ModalHead>
            <ModalContent>{children}</ModalContent>
          </ModalBox>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalBox = styled.div`
  background-color: white;
  height: 200px;
  width: 80%;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
`;

const ModalHead = styled.div`
  display: flex;
  justify-content: end;
`;

const ModalContent = styled.div``;

export default AppModal;
