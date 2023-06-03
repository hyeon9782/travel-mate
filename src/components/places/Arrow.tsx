import styled from "styled-components";
import { ArrowDownIcon } from "../common/icons";
import { useEffect, useState } from "react";

const Arrow = () => {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <ArrowContainer className="arrow-container">
      <ArrowBlock className={`arrow-block ${isUp ? "up" : ""}`}>
        <ArrowDownIcon />
      </ArrowBlock>
    </ArrowContainer>
  );
};

const ArrowBlock = styled.div`
  font-size: 32px;
  text-align: center;
`;

const ArrowContainer = styled.div`
  .arrow-block {
    transition: transform 1s ease;
  }

  .arrow-block.up {
    transform: translateY(-10px);
  }
`;

export default Arrow;
