import styled from "styled-components";
import { ArrowDownIcon } from "../common/icons";
import { useState } from "react";

const Arrow = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isUp, setIsUp] = useState(false);

  const handleArrowClick = () => {
    setIsAnimating(true);
    setIsUp(!isUp);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 애니메이션 시간 (1초)
  };
  return (
    <div className="arrow-container">
      <ArrowBlock onClick={handleArrowClick}>
        <ArrowDownIcon />
      </ArrowBlock>
    </div>
  );
};

const ArrowBlock = styled.div`
  font-size: 32px;
  text-align: center;
`;

export default Arrow;
