import styled from "styled-components";
import Button from "../common/Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";
import { Place } from "../../types";
import { useEffect, useState } from "react";

type Props = {
  place: Place;
};

const ResultItem = ({ place }: Props) => {
  const [selectPlaces, setSelectPlaces] = useRecoilState(selectPlacesState);
  const [isSelect, setIsSelect] = useState(false);

  const { name, user_ratings_total, rating } = place;

  const checkPlace = () => {
    setIsSelect(selectPlaces.includes(place));
  };

  const addPlace = (place: Place) => {
    setSelectPlaces((prev) => [...prev, place]);
  };

  const removePlace = (place: Place) => {
    setSelectPlaces((prev) =>
      prev.filter((v) => v.place_id !== place.place_id)
    );
  };

  useEffect(() => {
    checkPlace();
  }, [selectPlaces]);

  return (
    <ResultItemBlock isSelect={isSelect}>
      <div className="name-box">{name}</div>
      <div className="rating-box">
        <div>리뷰 개수 : {user_ratings_total}개</div>
        <div>평균 평점 : {rating}점</div>
      </div>
      <div className="btn-box">
        {!isSelect ? (
          <Button text="추가" color="black" onClick={() => addPlace(place)} />
        ) : (
          <Button
            text="제거"
            color="black"
            onClick={() => removePlace(place)}
          />
        )}
      </div>
    </ResultItemBlock>
  );
};

const ResultItemBlock = styled.div<{ isSelect: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.isSelect ? "lightgray" : "white")};
  .name-box {
  }

  .rating-box {
    div {
      padding: 3px;
    }
  }
`;

export default ResultItem;
