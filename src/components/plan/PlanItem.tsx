import styled from "styled-components";
import { Plan } from "../../types";
import { EditIcon, TrashIcon } from "../common/icons";
import { useNavigate } from "react-router-dom";

type Props = {
  plan: Plan;
  onDelete: (event: MouseEvent, plan_id: number) => void;
};

const PlanItem = ({ plan, onDelete }: Props) => {
  const navigate = useNavigate();
  const { plan_id, cities, period, title } = plan;

  const moveDetail = (plan_id: number) => {
    navigate(`/plan/${plan_id}`);
  };

  const moveEdit = (event: MouseEvent, plan_id: number) => {
    event.stopPropagation();
    navigate(`/plan/edit/${plan_id}`, { state: { planData: plan } });
  };

  return (
    <PlanItemBlock onClick={() => moveDetail(plan_id)}>
      <div className="item-box">
        <ImageBox></ImageBox>
        <TextBox>
          <div className="title">{title}</div>
          <div className="period">
            {period[0].slice(0, 7)} - {period[1].slice(0, 7)}
          </div>
          <div className="city">{cities.length}개 도시</div>
        </TextBox>
      </div>
      <IconBox>
        <EditIcon onClick={(e: MouseEvent) => moveEdit(e, plan_id)} />
        <TrashIcon onClick={(e: MouseEvent) => onDelete(e, plan_id)} />
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
