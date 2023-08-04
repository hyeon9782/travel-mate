import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { citiesState } from "../../store/citiesState";
import { isDomesticState } from "../../store/isDomesticState";
import { searchPlacesState } from "../../store/searchPlacesState";
import { planState } from "../../store/planState";
type Props = {
  size?: string;
  holder?: string;
  onSubmit?: (
    e: React.FormEventHandler<HTMLFormElement>,
    setSearchPlaces: any,
    searchData: any
  ) => void;
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

  const planData = useRecoilValue(planState);
  const setSearchPlaces = useSetRecoilState(searchPlacesState);

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
        size={size}
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

const InputBlock = styled.input<{ size?: string }>`
  width: 300px;
  border: none;
  outline: none;
  font-size: ${(props) => (props.size === "big" ? "1.5rem" : "1rem")};
  box-sizing: border-box;
  height: ${(props) => (props.size === "big" ? "80px" : "30px")};
`;

export default Input;
