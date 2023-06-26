import styled from "styled-components";
import Days from "../days/Days";
import RenderMap from "../google/RenderMap";
import PlacesTab from "../places/PlacesTab";
import { Place } from "../../types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import { scheduleState } from "../../store/scheduleState";
import Schedules from "../schedules/Schedules";

const PlanArea = () => {
  const currentDay = useRecoilValue(currentDayState);
  const setSchedule = useSetRecoilState(scheduleState);

  // schedule이라는 state를 없애고
  // selectPlaces라는 state 하나로 관리 가능할 거 같아
  // day라는 프로퍼티를 하나 추가하고
  // 검색 화면에서 장소를 선택했을 때는 day : 0
  // 일정 화면에서 n일차로 계획에 넣었을 때는 day : n 이런식으로
  // schedule 컴포넌트에서는 selectPlaces라는 state를
  const selectPlaces = (place: Place) => {
    setSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[currentDay] = [...prev[currentDay]];
      newSchedule[currentDay].push(place);
      return newSchedule;
    });
  };

  return (
    <PlanBlock>
      <PlacesTab selectPlace={selectPlaces} />
      <ScheduleBlock>
        <ScheduleBox>
          <Days />
          <Schedules />
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
