import styled from "styled-components";
import Button from "../common/Button";
import { useSetRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";
import { Place } from "../../types";
import { placesState } from "../../store/selectPlacesState";

type Props = {
  place: Place;
};

const ResultItem = ({ place }: Props) => {
  const setSelectPlaces = useSetRecoilState(selectPlacesState);

  const { name, user_ratings_total, rating } = place;

  const addPlace = (place: Item) => {
    setSelectPlaces((prev) => [...prev, place]);
  };

  const removePlace = (item: Item) => {
    setSelectPlaces((prev) => prev.filter((v) => v.place_id !== item.place_id));
  };
  return (
    <ResultItemBlock>
      <div className="name-box">{name}</div>
      <div className="rating-box">
        <div>리뷰 개수 : {user_ratings_total}개</div>
        <div>평균 평점 : {rating}점</div>
      </div>
      <div className="btn-box">
        <Button text="추가" color="black" onClick={() => addPlace(place)} />
        <Button text="제거" color="black" onClick={() => removePlace(place)} />
      </div>
    </ResultItemBlock>
  );
};

const ResultItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  .name-box {
  }

  .rating-box {
    div {
      padding: 3px;
    }
  }
`;

export default ResultItem;
