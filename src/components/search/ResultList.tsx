import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchState } from "../../store/searchState";
import ResultItem from "./ResultItem";

const ResultList = () => {
  const searchResult = useRecoilValue(searchState);
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
