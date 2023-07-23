import styled from "styled-components";
import Button from "../common/Button";
import { useRecoilState } from "recoil";
import { Place } from "../../types";
import { checkPlace, handlePlaceSelection } from "../../service/place";
import { planState } from "../../store/planState";

type Props = {
  place: Place;
};

const ResultItem = ({ place }: Props) => {
  const [planData, setPlanData] = useRecoilState(planState);
  const { name, user_ratings_total, rating } = place;

  const isSelect = checkPlace(place, planData.selectedPlaces);

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
            onClick={() => handlePlaceSelection(isSelect, setPlanData, place)}
          />
        ) : (
          <Button
            text="제거"
            color="black"
            onClick={() => handlePlaceSelection(isSelect, setPlanData, place)}
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
