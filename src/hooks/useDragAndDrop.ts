import { useRef } from "react";

const useDragAndDrop = (list: []) => {
  const dragItemIndex = useRef(0);
  const dragOverItemIndex = useRef(0);

  // 드래그를 시작할 때 실행되는 이벤트
  const dragStart = (e: any, index: number) => {
    console.log("시작");
    dragItemIndex.current = index;
    // e.target.classList.add("grabbing");
  };

  // 드래그 중일 때 실행되는 이벤트
  const dragEnter = (e: any, index: number) => {
    console.log("중");
    dragOverItemIndex.current = index;
    const copyListItems = [...list]; // 1
    const dragItemContent = copyListItems[dragItemIndex.current]; //2
    copyListItems.splice(dragItemIndex.current, 1); //3
    copyListItems.splice(dragOverItemIndex.current, 0, dragItemContent); // 4
    dragItemIndex.current = dragOverItemIndex.current;
    dragOverItemIndex.current = 0; //5
    setList(copyListItems);
  };

  // 드래그가 끝나면 실행되는 이벤트
  const drop = (e: any) => {
    console.log("끝");
    // e.target.classList.remove("grabbing");
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };
};

export default useDragAndDrop;
