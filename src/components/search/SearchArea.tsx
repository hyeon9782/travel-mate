import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import Input from "../common/Input";
import ResultList from "./ResultList";
import PlacesTab from "../places/PlacesTab";
import DoneButton from "../plan/DoneButton";
import { handlePlaceSelection, searchPlaces } from "../../service/place";
import { Place, Plan } from "../../types";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";

type Props = {
  onNext: () => void;
  planData: Plan;
};

const SearchArea = ({ onNext, planData }: Props) => {
  const setPlanData = useSetRecoilState(planState);

  const handlePlaceSelectionRemove = (place: Place) => {
    handlePlaceSelection(true, setPlanData, place);
  };

  return (
    <SearchAreaBlock>
      <PlacesTab handleClick={handlePlaceSelectionRemove} />
      <SearchBlock>
        <MapBox>
          <SearchMap planData={planData} />
        </MapBox>
        <SearchBox>
          <InputBox>
            <Input
              onSubmit={searchPlaces}
              holder="가고 싶은 장소를 검색해보세요!"
            />
          </InputBox>
          <ResultList />
        </SearchBox>
      </SearchBlock>
      <BtnBox>
        <DoneButton onNext={onNext}>장소 선택 완료</DoneButton>
      </BtnBox>
    </SearchAreaBlock>
  );
};

const SearchAreaBlock = styled.article`
  width: 100%;
  height: calc(100vh - 44.59px);
  overflow: hidden;
`;

const SearchBlock = styled.article`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 10px;
`;

const SearchBox = styled.div`
  width: 100%;
`;

const MapBox = styled.div`
  height: 200px;
  background-color: gray;
`;

const BtnBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
`;

export default SearchArea;
