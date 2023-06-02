import styled from "styled-components";
import Days from "../components/days/Days";
import SearchMap from "../components/google/SearchMap";

const PlanPage = () => {
  return (
    <PlanPageBlock>
      <Days />
      <SearchMap />
    </PlanPageBlock>
  );
};

const PlanPageBlock = styled.section``;

export default PlanPage;
