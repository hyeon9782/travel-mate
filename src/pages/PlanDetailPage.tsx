import styled from "styled-components";
import RenderMap from "../components/google/RenderMap";

const PlanDetailPage = () => {
  return (
    <PlanDetailPageBlock>
      <MapBox>
        <RenderMap />
      </MapBox>
      <div></div>
    </PlanDetailPageBlock>
  );
};

const PlanDetailPageBlock = styled.section`
  height: 100%;
`;

const MapBox = styled.div`
  height: 20%;
  width: 100%;
`;

export default PlanDetailPage;
