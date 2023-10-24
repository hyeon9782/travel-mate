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
        <TitleBox>{title}</TitleBox>
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
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid silver;
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  width: 90%;
  text-align: center;
`;

const ArrowBox = styled.div`
  width: 10%;
  font-size: 1.3rem;
  text-align: center;
`;

const AccordionContents = styled.div`
  height: 0;
  transition: height 0.35s ease;
`;

const AccordionContentsChild = styled.div`
  padding: 10px;
`;

export default Accordion;
