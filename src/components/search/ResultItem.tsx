import styled from "styled-components";
import Button from "../common/Button";
import { Place, Plan } from "../../types";
import { checkPlace, handlePlaceSelection } from "../../service/place";
import { truncateTextOverflow } from "../../utils/utils";
import { StarIcon } from "../common/icons";

type Props = {
  place: Place;
  planData: Plan;
};

const ResultItem = ({ place, planData }: Props) => {
  const { name, user_ratings_total, rating } = place;

  const isSelect = checkPlace(place, planData.selectedPlaces);

  return (
    <ResultItemBlock isSelect={isSelect}>
      <div className="name-box">{truncateTextOverflow(name, 9)}</div>
      <div className="rating-box">
        <div className="icon-box">
          <StarIcon />
        </div>
        <div className="score-box">
          {rating} (리뷰:{user_ratings_total}개)
        </div>
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
    width: 50%;
  }

  .rating-box {
    width: 35%;
    display: flex;
    align-items: center;
    gap: 5px;
    .icon-box {
      font-size: 1.2rem;
    }

    .score-box {
      font-size: 0.8rem;
    }
  }

  .btn-box {
    width: 15%;
  }
`;

export default ResultItem;
