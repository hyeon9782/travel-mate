import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import ResultList from "./ResultList";
import PlacesTab from "../places/PlacesTab";
import DoneButton from "../plan/DoneButton";
import { handlePlaceSelection, searchPlaces } from "../../service/place";
import { Place, Plan } from "../../types";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";
import SearchInput from "./SearchInput";
import { searchPlacesState } from "../../store/searchPlacesState";
import KakaoMap from "../../libs/kakao/KakaoMap";

type Props = {
  onNext: () => void;
  planData: Plan;
};
const { kakao } = window;
const SearchArea = ({ onNext, planData }: Props) => {
  const isDomestic = planData.cities[0].isDomestic;
  const setPlanData = useSetRecoilState(planState);
  const setSearchPlaces = useSetRecoilState(searchPlacesState);

  const handlePlaceSelectionRemove = (place: Place) => {
    handlePlaceSelection(true, setPlanData, place);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isDomestic) {
      searchPlacesKakao(e);
    } else {
      searchPlaces(e, setSearchPlaces, planData.cities[0]);
    }
  };

  const searchPlacesKakao = (e: any) => {
    const keyword = e.target.keyword.value;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data: [], status: any, pagination: any) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
        console.log(pagination);
        return data;
      }
    });
  };

  return (
    <SearchAreaBlock>
      <MapBox>
        {isDomestic ? <KakaoMap /> : <SearchMap planData={planData} />}
      </MapBox>
      <SearchBlock>
        <PlacesTab
          handleClick={handlePlaceSelectionRemove}
          planData={planData}
        />
        <SearchBox>
          <InputBox>
            <SearchInput onSubmit={handleSubmit} />
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
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-top: 5px;
`;

const SearchBox = styled.div`
  width: 100%;
`;

const MapBox = styled.div`
  height: 250px;
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
