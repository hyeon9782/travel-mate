import styled from "styled-components";
import Button from "../common/Button";
import { useSetRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";

type Props = {
  item: Item;
};

type Item = {
  name: string;
  user_ratings_total: string;
  rating: string;
};

const ResultItem = ({ item }: Props) => {
  const setSelectPlaces = useSetRecoilState(selectPlacesState);

  const { name, user_ratings_total, rating } = item;

  const addPlace = (item: Item) => {
    setSelectPlaces((prev) => [...prev, item]);
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
        <Button text="추가" color="black" onClick={() => addPlace(item)} />
        <Button text="제거" color="black" onClick={() => removePlace(item)} />
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
