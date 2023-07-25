import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import { searchPlacesState } from "../../store/searchPlacesState";

const ResultList = () => {
  const searchPlaces = useRecoilValue(searchPlacesState);
  return (
    <ResultListBlock>
      {searchPlaces.length > 0 &&
        searchPlaces.map((item) => (
          <ResultItem key={item.place_id} place={item}></ResultItem>
        ))}
    </ResultListBlock>
  );
};

const ResultListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  height: 200px;
  padding: 10px;
  overflow: auto;
  background-color: #faf9fc;
`;

export default ResultList;
