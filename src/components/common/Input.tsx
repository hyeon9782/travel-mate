import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { citiesState } from "../../store/citiesState";
import { isDomesticState } from "../../store/isDomesticState";
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
  const setCities = useSetRecoilState(citiesState);
  const isDomestic = useRecoilValue(isDomesticState);
  return (
    <form onSubmit={onSubmit}>
      <InputBlock
        size={size}
        onChange={(e) => onChange(e, setCities, isDomestic)}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={holder}
      ></InputBlock>
    </form>
  );
};

const InputBlock = styled.input<{ size?: string }>`
  width: 300px;
  border: none;
  outline: none;
  font-size: ${(props) => (props.size === "big" ? "1.5rem" : "1rem")};
  box-sizing: border-box;
  height: ${(props) => (props.size === "big" ? "80px" : "30px")};
`;

export default Input;
