import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import { Plan } from "../../types";

type Props = {
  planData: Plan;
  setPlanData: any;
};
const ResultList = ({ planData, setPlanData }: Props) => {
  // const searchPlaces = [];

  const queryClient = useQueryClient();

  // const kakaoSearchPlaces = queryClient.getQueryData(["search-places", true]);

  const googleSearchPlaces = queryClient.getQueryData(["search-places", false]);

  return (
    <ResultListBlock>
      {googleSearchPlaces?.length > 0 &&
        googleSearchPlaces?.map((place) => (
          <ResultItem
            key={place.place_id}
            place={place}
            planData={planData}
            setPlanData={setPlanData}
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
