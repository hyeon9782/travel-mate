import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import { placesState } from "../../store/placesState";

const ResultList = () => {
  const searchResult = useRecoilValue(placesState);
  return (
    <ResultListBlock>
      {searchResult.length > 0 &&
        searchResult.map((item) => (
          <ResultItem key={item.place_id} item={item}></ResultItem>
        ))}
    </ResultListBlock>
  );
};

const ResultListBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding: 10px;
  overflow: auto;
`;

export default ResultList;
