import styled from "styled-components";
import { Plan } from "../../types";
import { EditIcon, TrashIcon } from "../common/icons";

const PlanItem = ({ plan }: Plan) => {
  return (
    <PlanItemBlock>
      <div className="item-box">
        <ImageBox></ImageBox>
        <TextBox>
          <div className="title">{plan.name}</div>
          <div className="period">
            {plan.startDate} - {plan.endDate}
          </div>
          <div className="city">{plan.city.length}개 도시</div>
        </TextBox>
      </div>
      <IconBox>
        <EditIcon onClick={() => console.log("안녕")} />
        <TrashIcon onClick={() => console.log("안녕")} />
      </IconBox>
    </PlanItemBlock>
  );
};

const PlanItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  .item-box {
    display: flex;
  }
`;

const ImageBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: lightgray;
  border-radius: 50%;
`;

const TextBox = styled.div`
  line-height: 20px;
  padding-left: 10px;
  .title {
  }

  .period {
    font-size: 0.8rem;
    color: gray;
  }

  .city {
    font-size: 0.8rem;
    color: gray;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 20px;
`;

export default PlanItem;
