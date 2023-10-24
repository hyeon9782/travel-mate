import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Schedule from "./Schedule";
import { currentDayState } from "../../store/currentDayState";
import { handleScheduleSelection } from "../../service/place";
import { Place, Plan } from "../../types";
import { useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { currentScheduleState } from "../../store/currentScheduleState";

type Props = {
  planData: Plan;
  setPlanData?: any;
};
const Schedules = ({ planData, setPlanData }: Props) => {
  const currentDay = useRecoilValue(currentDayState);
  const setCurrentSchedule = useSetRecoilState(currentScheduleState);
  const location = useLocation();
  const path =
    location.pathname === "/plan" || location.pathname === "/plan/edit";
  const initialData = useMemo(
    () =>
      planData.selectedPlaces
        .filter((selectedPlace) => selectedPlace.day === currentDay)
        .sort((a, b) => a.order - b.order),
    [currentDay, planData.selectedPlaces]
  );

  const dragItemIndex = useRef(0);
  const dragOverItemIndex = useRef(0);
  const copyListItemsRef = useRef([...initialData]); // 추가: 원본 리스트의 복사본

  // 드래그를 시작할 때 실행되는 이벤트
  const dragStart = (e: any, index: number) => {
    console.log("시작");
    dragItemIndex.current = index;
    copyListItemsRef.current = [...initialData]; // 추가: 드래그 시작 시점에서 리스트 복사
    e.target.classList.add("grabbing");
  };

  // 드래그 중일 때 실행되는 이벤트
  const dragEnter = (e: any, index: number) => {
    console.log("중");
    dragOverItemIndex.current = index;

    const copyListItems = copyListItemsRef.current;

    // 드래그 중인 아이템과 드랍될 위치의 아이템 찾기
    const dragItem = copyListItems[dragItemIndex.current];
    const dropItem = copyListItems[dragOverItemIndex.current];

    // 두 아이템의 order 프로퍼티 교환
    const tempOrder = dragItem.order;
    dragItem.order = dropItem.order;
    dropItem.order = tempOrder;
  };

  const handleScheduleRemove = (place: Place) => {
    handleScheduleSelection(true, setPlanData, place, currentDay, 0);
  };

  // 드래그가 끝나면 실행되는 이벤트
  const drop = (e: any) => {
    console.log("끝");
    setPlanData((prev) => ({
      ...prev,
      selectedPlaces: copyListItemsRef.current,
    }));
    e.target.classList.remove("grabbing");
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleScheduleClick = (index: number) => {
    setCurrentSchedule(index);
  };

  return (
    <SchedulesBlock>
      <PlaceBlock>
        {initialData &&
          initialData.map((place, index) => (
            <div
              key={place.place_id}
              onClick={() => handleScheduleClick(index)}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragOver={onDragOver}
              onDragEnd={drop}
              draggable={path}
            >
              <Schedule
                key={place.place_id}
                place={place}
                planId={planData.plan_id}
                setPlanData={setPlanData}
                onRemove={handleScheduleRemove}
              />
            </div>
          ))}
      </PlaceBlock>
    </SchedulesBlock>
  );
};

const SchedulesBlock = styled.article`
  display: flex;
  overflow: auto;
`;

const PlaceBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export default Schedules;
