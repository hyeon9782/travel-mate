import styled from "styled-components";
import { Plan } from "../../types";
import { EditIcon, TrashIcon } from "../common/icons";
import { fetchPlanDetail, removePlan } from "../../service/plan";
import { useNavigate } from "react-router-dom";

const PlanItem = ({ plan }: Plan) => {
  const navigate = useNavigate();

  const moveDetail = () => {
    fetchPlanDetail(plan.userId, plan.planId);
    navigate(`/plan/${plan.planId}`);
  };

  const moveEdit = () => {
    navigate(`/plan/${plan.planId}`);
  };

  return (
    <PlanItemBlock onClick={moveDetail}>
      <div className="item-box">
        <ImageBox></ImageBox>
        <TextBox>
          <div className="title">{plan.cities[0].city} 여행</div>
          <div className="period">
            {plan.period[0].slice(0, 7)} - {plan.period[1].slice(0, 7)}
          </div>
          <div className="city">{plan.cities.length}개 도시</div>
        </TextBox>
      </div>
      <IconBox>
        <EditIcon onClick={() => moveDetail()} />
        <TrashIcon onClick={() => removePlan(plan.planId)} />
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
