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
        placeholder="여행 지역을 입력해주세요!"
      ></InputBlock>
    </form>
  );
};

const InputBlock = styled.input<{ size?: string }>`
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1.5rem;
  /* &&:focus: none; 포커스 했을 때도 none
  display: */
  height: ${(props) => (props.size === "big" ? "50px" : "30px")};
`;

export default Input;
