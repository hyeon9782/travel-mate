import styled from "styled-components";
import Button from "../common/Button";

type Props = {
  item: object;
};

const ResultItem = ({ item: { name, user_ratings_total, rating } }: Props) => {
  return (
    <ResultItemBlock>
      <div className="name-box">{name}</div>
      <div className="rating-box">
        <div>리뷰 개수 : {user_ratings_total}개</div>
        <div>평균 평점 : {rating}점</div>
      </div>
      <div className="btn-box">
        <Button text="추가" color="black" />
        <Button text="제거" color="black" />
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
