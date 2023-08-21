import styled from "styled-components";
import { ArrowDownIcon, ArrowUpIcon } from "./icons";
import { ReactNode, useRef, useState } from "react";
type Props = {
  title: string;
  children: ReactNode;
};
const Accordion = ({ title, children }: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const handleArrowClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };
  return (
    <AccordionContainer>
      <AccordionHeader>
        {title}
        <ArrowBox onClick={handleArrowClick}>
          {!isCollapse ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </ArrowBox>
      </AccordionHeader>
      <AccordionContents ref={parentRef}>
        <AccordionContentsChild ref={childRef}>
          {children}
        </AccordionContentsChild>
      </AccordionContents>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid silver;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ArrowBox = styled.div`
  font-size: 1.3rem;
`;

const AccordionContents = styled.div`
  height: 0;
  transition: height 0.35s ease;
`;

const AccordionContentsChild = styled.div`
  padding: 10px;
`;

export default Accordion;
