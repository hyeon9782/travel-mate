import styled from "styled-components";
import { searchCity } from "../../service/city";
import CityTab from "./CityTab";
import { SearchIcon } from "../common/icons";
import Input from "../common/Input";
import PrevStep from "../plan/PrevStep";

const CitySubHeader = ({ moveStep }: (direction: number) => void) => {
  return (
    <CitySubHeaderBlock>
      <SubHeaderBox>
        <PrevStep moveStep={moveStep} />

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
`;

const SubHeaderBox = styled.div`
  display: flex;
`;

const SearchBox = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 90%;

  .icon {
    font-size: 1.5rem;
  }
`;

export default CitySubHeader;
