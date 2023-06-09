import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import Places from "../places/Places";
import PlacesTab from "../places/PlacesTab";

const PlanArea = () => {
  return (
    <PlanBlock>
      <PlacesTab />
      <ScheduleBlock>
        <ScheduleBox>
          <Days />
          <Places />
        </ScheduleBox>
        <MapBox>
          <RenderMap />
        </MapBox>
      </ScheduleBlock>
    </PlanBlock>
  );
};

const PlanBlock = styled.div`
  height: 100%;
`;

const ScheduleBlock = styled.article`
  height: 80%;
  display: flex;
`;

const ScheduleBox = styled.div`
  width: 50%;
`;

const MapBox = styled.div`
  width: 50%;
  /* height: 300px; */
`;

export default PlanArea;
