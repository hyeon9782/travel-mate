import styled from "styled-components";
type Props = {
  size?: string;
  holder?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
};
const Input = ({
  size = "small",
  holder,
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
        placeholder={holder}
      ></InputBlock>
    </form>
  );
};

const InputBlock = styled.input<{ size?: string }>`
  width: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: ${(props) => (props.size === "big" ? "1.5rem" : "1.1rem")};
  padding: 10px;
  box-sizing: border-box;
  height: ${(props) => (props.size === "big" ? "80px" : "45px")};
`;

export default Input;
