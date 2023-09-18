import styled from "styled-components";
import ResultItem from "./ResultItem";
import { Plan } from "../../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchPlacesKakao } from "../../service/place";
type Props = {
  planData: Plan;
};
const ResultList = ({ planData }: Props) => {
  const searchPlaces = [];
  const { data } = useQuery({
    queryKey: ['searchPlacesKakao'],
    queryFn: 
  })

  console.log(data);

  return (
    <ResultListBlock>
      {searchPlaces.length > 0 &&
        searchPlaces.map((item) => (
          <ResultItem
            key={item.place_id}
            place={item}
            planData={planData}
          ></ResultItem>
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
