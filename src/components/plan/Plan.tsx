import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import Places from "../places/Places";
import { useRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";
import AppSwiper from "../../libs/AppSwiper";
import SelectPlace from "../places/SelectPlace";

const Plan = () => {
  const [selectPlaces, setSelectPlaces] = useRecoilState(selectPlacesState);
  return (
    <PlanBlock>
      <AppSwiper list={selectPlaces}></AppSwiper>
      <div className="schedule-block">
        <Days />
        <Places />
      </div>
      <div className="map-block">
        <RenderMap />
      </div>
    </PlanBlock>
  );
};

const PlanBlock = styled.div`
  display: flex;
  .schedule-block {
    width: 50%;
  }
  .map-block {
    width: 50%;
    height: 300px;
  }
`;

export default Plan;
