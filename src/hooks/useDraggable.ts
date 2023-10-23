import { useState } from "react";
import { Place } from "../types";

const useDraggable = (initialItems: Place[]) => {
  const [items, setItems] = useState(initialItems);
  const [draggingItemIndex, setDraggingItemIndex] = useState<number | null>(
    null
  );

  const handleDragStart = (index: number) => {
    setDraggingItemIndex(index);
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();

    if (draggingItemIndex === null || draggingItemIndex === index) return;

    const newItems = [...items];
    newItems.splice(index, 0, newItems.splice(draggingItemIndex!, 1)[0]);

    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItemIndex(null);
  };

  return { items, handleDragStart, handleDragOver, handleDragEnd };
};
export default useDraggable;
