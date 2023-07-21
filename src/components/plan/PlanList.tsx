import React from "react";
import PlanItem from "./PlanItem";

const PlanList = ({ list }) => {
  return (
    <div>
      {list && list.map((item, index) => <PlanItem key={index} plan={item} />)}
    </div>
  );
};

export default PlanList;
