import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import { searchPlacesState } from "../../store/searchPlacesState";
type Props = {
  list?: [];
};
const ResultList = ({ list }: Props) => {
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
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding: 10px;
  overflow: auto;
`;

export default ResultList;
