import styled from "styled-components";
type Props = {
  children: any;
  moveStep: (direction: number) => void;
  disabled?: boolean;
};
const DoneButton = ({ children, moveStep, disabled }: Props) => {
  return (
    <DoneButtonBox onClick={() => moveStep(1)} disabled={disabled}>
      {children}
    </DoneButtonBox>
  );
};

const DoneButtonBox = styled.button`
  text-align: center;
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  padding: 15px;
`;

export default DoneButton;
