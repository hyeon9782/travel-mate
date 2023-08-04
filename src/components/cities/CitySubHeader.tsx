import styled from "styled-components";
import { searchCity } from "../../service/city";
import CityTab from "./CityTab";
import { SearchIcon } from "../common/icons";
import Input from "../common/Input";
import PrevStep from "../plan/PrevStep";
type Props = {
  onPrev: () => void;
};
const CitySubHeader = ({ onPrev }: Props) => {
  return (
    <CitySubHeaderBlock>
      <SubHeaderBox>
        <PrevStep onPrev={onPrev} />
        <SearchBox>
          <Input
            onChange={searchCity}
            holder="여행을 떠날 도시를 검색해보세요!"
          />
          <SearchIcon className="icon" />
        </SearchBox>
      </SubHeaderBox>
      <CityTab />
    </CitySubHeaderBlock>
  );
};

const CitySubHeaderBlock = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
`;

const SubHeaderBox = styled.div`
  display: flex;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  .icon {
    font-size: 1.8rem;
    padding: 5px;
  }
`;

export default CitySubHeader;
