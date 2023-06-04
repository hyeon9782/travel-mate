import styled from "styled-components";
type Props = {
  size?: string;
};
const Input = ({ size = "small" }: Props) => {
  return <InputBlock size={size}></InputBlock>;
};

const InputBlock = styled.input<{ size?: string }>`
  width: 100%;
  height: ${(props) => (props.size === "big" ? "50px" : "30px")};
`;

export default Input;
