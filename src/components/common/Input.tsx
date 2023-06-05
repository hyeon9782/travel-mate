import styled from "styled-components";
type Props = {
  size?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
};
const Input = ({
  size = "small",
  onSubmit,
  onChange,
  value,
  onKeyDown,
}: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <InputBlock
        size={size}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      ></InputBlock>
    </form>
  );
};

const InputBlock = styled.input<{ size?: string }>`
  width: 100%;
  height: ${(props) => (props.size === "big" ? "50px" : "30px")};
`;

export default Input;
