import styled from "styled-components";
type Props = {
  children: any;
  onNext?: () => void;
  disabled?: boolean;
  onClick?: () => void;
};
const DoneButton = ({ children, onNext, disabled }: Props) => {
  return (
    <DoneButtonBox onClick={onNext} disabled={disabled}>
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
