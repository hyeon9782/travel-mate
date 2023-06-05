import styled from "styled-components";
type Props = {
  size?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEvent;
  onKeyDown: (e: React.KeyboardEvent) => void; // 함수를 넘기고 있어서 그럼
  value: string;
};
const Input = ({
  size = "small",
  onSubmit,
  onChange,
  value,
  onKeyDown,
}: Props) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
  /* margin: 0; */
  height: ${(props) => (props.size === "big" ? "50px" : "30px")};
`;

export default Input;
