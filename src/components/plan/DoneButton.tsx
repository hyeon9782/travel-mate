import styled from "styled-components";
type Props = {
  children: any;
  moveStep: (direction: number) => void;
  addData: (key: string, value: string) => void;
  disabled?: boolean;
};
const DoneButton = ({ children, moveStep, disabled, addData }: Props) => {
  const handleClick = () => {
    addData("", "");
    moveStep(1);
  };
  return (
    <DoneButtonBox onClick={() => handleClick()} disabled={disabled}>
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
