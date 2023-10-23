import styled from "styled-components";
import { useRef } from "react";
import Schedule from "../schedules/Schedule";
type Props = {
  list: [];
  setList: any;
  renderItem?: () => any;
};
const DragAndDrop = ({ list, setList, renderItem }: Props) => {
  const dragItemIndex = useRef(0);
  const dragOverItemIndex = useRef(0);
  const copyListItemsRef = useRef([...list]); // 추가: 원본 리스트의 복사본

  // 드래그를 시작할 때 실행되는 이벤트
  const dragStart = (e: any, index: number) => {
    console.log("시작");
    dragItemIndex.current = index;
    copyListItemsRef.current = [...list]; // 추가: 드래그 시작 시점에서 리스트 복사
    // e.target.classList.add("grabbing");
  };

  // 드래그 중일 때 실행되는 이벤트
  const dragEnter = (e: any, index: number) => {
    console.log("중");
    dragOverItemIndex.current = index;
    // const copyListItems = [...list]; // 기존 리스트 복사

    // 변경된 부분: copyListItemsRef 사용
    const copyListItems = copyListItemsRef.current;

    // 드래그 중인 아이템과 드랍될 위치의 아이템 찾기
    const dragItem = copyListItems[dragItemIndex.current];
    const dropItem = copyListItems[dragOverItemIndex.current];

    // 두 아이템의 order 프로퍼티 교환
    const tempOrder = dragItem.order;
    dragItem.order = dropItem.order;
    dropItem.order = tempOrder;

    // setList(copyListItems); // 리스트 업데이트
    // dragOverItemIndex.current = index;
    // const copyListItems = [...list]; // 1
    // const dragItemContent = copyListItems[dragItemIndex.current]; //2
    // copyListItems.splice(dragItemIndex.current, 1); //3
    // copyListItems.splice(dragOverItemIndex.current, 0, dragItemContent); // 4
    // dragItemIndex.current = dragOverItemIndex.current;
    // dragOverItemIndex.current = 0; //5
    // setList((prev) => ({
    //   ...prev,
    //   selectedPlaces: copyListItems,
    // }));
  };

  // 드래그가 끝나면 실행되는 이벤트
  const drop = (e: any) => {
    console.log("끝");
    setList((prev) => ({
      ...prev,
      selectedPlaces: copyListItemsRef.current,
    }));
    e.target.classList.remove("grabbing");
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <List>
        {list &&
          list.map((item, index) => (
            <Item
              key={index}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragOver={onDragOver}
              onDragEnd={drop}
              draggable
            >
              <Schedule
                key={item.place_id}
                place={item}
                setPlanData={setPlanData}
                onRemove={handleScheduleRemove}
              />
            </Item>
          ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  text-align: center;
  padding: 10px;
  background-color: lightgray;
`;

export default DragAndDrop;
