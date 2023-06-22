import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scheduleState } from "../../store/scheduleState";

const Schedules = () => {
  const schedules = useRecoilValue(scheduleState);
  return (
    <SchedulesBlock>
      {schedules &&
        schedules.map((place, index) => (
          <Schedules key={index} place={place} />
        ))}
    </SchedulesBlock>
  );
};

const SchedulesBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export default Schedules;
