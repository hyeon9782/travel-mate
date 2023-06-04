import styled from "styled-components";
type Props = {
  size?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};
const Input = ({ size = "small", onSubmit }: Props) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <InputBlock size={size}></InputBlock>
    </form>
  );
};

const InputBlock = styled.input<{ size?: string }>`
  width: 100%;
  /* margin: 0; */
  height: ${(props) => (props.size === "big" ? "50px" : "30px")};
`;

export default Input;
