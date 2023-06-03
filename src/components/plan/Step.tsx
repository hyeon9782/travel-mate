import styled, { keyframes, css } from "styled-components";

type Props = {
  stepName: string;
  isActive: boolean;
};

const Step = ({ stepName, isActive }: Props) => {
  return <StepBlock isActive={isActive}>{stepName}</StepBlock>;
};

const activeAnimation = keyframes`
  from {
    background-color: lightgray;
  }
  to {
    background-color: black;
  }
`;

const StepBlock = styled.div<{ isActive?: boolean }>`
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${(props) => (props.isActive ? "black" : "lightgray")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isActive ? "black" : "gray")};
  }

  ${(props) =>
    props.isActive &&
    css`
      animation: ${activeAnimation} 0.5s linear 1;
    `}
`;

export default Step;
