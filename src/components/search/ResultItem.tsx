import styled from "styled-components";
import Button from "../common/Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedPlacesState } from "../../store/selectedPlacesState";
import { Place } from "../../types";
import { useEffect, useState } from "react";
import { appendPlace, checkPlace, removePlace } from "../../service/place";

type Props = {
  place: Place;
};

const ResultItem = ({ place }: Props) => {
  const [isSelect, setIsSelect] = useState(false);
  const [selectedPlaces, setSelectedPlaces] =
    useRecoilState(selectedPlacesState);
  const { name, user_ratings_total, rating } = place;

  useEffect(() => {
    checkPlace(place, selectedPlaces, setIsSelect);
    return () => {
      // Cleanup function
      // 이전에 선택되었던 장소에서 해제해야 할 작업 수행
    };
  }, [selectedPlaces]);

  return (
    <ResultItemBlock isSelect={isSelect}>
      <div className="name-box">{name}</div>
      <div className="rating-box">
        <div>리뷰 개수 : {user_ratings_total}개</div>
        <div>평균 평점 : {rating}점</div>
      </div>
      <div className="btn-box">
        {!isSelect ? (
          <Button
            text="추가"
            color="black"
            onClick={() => appendPlace(place, setSelectedPlaces)}
          />
        ) : (
          <Button
            text="제거"
            color="black"
            onClick={() => removePlace(place, setSelectedPlaces)}
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

  padding: 5px 0;
  border-bottom: 1px solid lightgray;
  background-color: #faf9fc;
  .name-box {
    font-weight: bold;
  }

  .rating-box {
    div {
      padding: 3px;
    }
  }
`;

export default ResultItem;
