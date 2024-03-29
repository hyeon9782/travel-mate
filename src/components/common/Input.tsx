import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { citiesState } from "../../store/citiesState";
import { isDomesticState } from "../../store/isDomesticState";
type Props = {
  size1?: string;
  holder?: string;
  onSubmit?: (
    e: React.FormEvent<HTMLFormElement>,
    setSearchPlaces: any,
    searchData: any
  ) => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    setCities: any,
    isDomestic: boolean
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({
  size1 = "small",
  holder,
  onSubmit,
  onChange,
  value,
  onKeyDown,
}: Props) => {
  const setCities = useSetRecoilState(citiesState);
  const isDomestic = useRecoilValue(isDomesticState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e, setCities, isDomestic);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e, setSearchPlaces, planData.cities[0]);
    }
  };

  return (
    <FormBlock onSubmit={handleSubmit}>
      <InputBlock
        size1={size1}
        onChange={handleChange}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={holder}
      ></InputBlock>
    </FormBlock>
  );
};

const FormBlock = styled.form`
  display: flex;
  align-items: center;
`;

const InputBlock = styled.input<Props>`
  width: 300px;
  border: none;
  outline: none;
  font-size: ${(props) => (props.size1 === "big" ? "1.5rem" : "1rem")};
  box-sizing: border-box;
  height: ${(props) => (props.size1 === "big" ? "80px" : "30px")};
`;

export default Input;
