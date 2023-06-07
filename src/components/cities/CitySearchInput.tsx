import styled from "styled-components";
import Input from "../common/Input";
type Props = {
  handleChange: (e: any) => void;
};
const CitySearchInput = ({ handleChange }: Props) => {
  return (
    <CitySearchInputBlock>
      <Input onChange={handleChange} />
    </CitySearchInputBlock>
  );
};

const CitySearchInputBlock = styled.div`
  padding: 10px;
`;
export default CitySearchInput;
