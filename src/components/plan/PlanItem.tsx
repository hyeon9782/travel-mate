import styled from "styled-components";
import { Plan } from "../../types";
import { EditIcon, TrashIcon } from "../common/icons";
import { fetchPlanDetail, removePlan } from "../../service/plan";
import { useNavigate } from "react-router-dom";

type Props = {
  plan: Plan;
};

const PlanItem = ({ plan }: Props) => {
  const navigate = useNavigate();

  const { user_id, plan_id, cities, period } = plan;

  const moveDetail = () => {
    fetchPlanDetail(user_id, plan_id);
    navigate(`/plan/${plan_id}`, { state: { planData: plan } });
  };

  const moveEdit = (event) => {
    event.stopPropagation();
    navigate(`/plan/edit/${plan_id}`, { state: { planData: plan } });
  };

  return (
    <PlanItemBlock onClick={moveDetail}>
      <div className="item-box">
        <ImageBox></ImageBox>
        <TextBox>
          <div className="title">{cities[0].city} 여행</div>
          <div className="period">
            {period[0].slice(0, 7)} - {period[1].slice(0, 7)}
          </div>
          <div className="city">{cities.length}개 도시</div>
        </TextBox>
      </div>
      <IconBox>
        <EditIcon onClick={(e) => moveEdit(e)} />
        <TrashIcon onClick={() => removePlan(plan_id)} />
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
