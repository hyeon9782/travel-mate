import { useState } from "react";
import styled from "styled-components";

const PostsTab = () => {
  const [select, setSelect] = useState(0);
  return (
    <PostsTabBlock>
      <li className={select === 0 ? "select" : ""}>전체</li>
      <li className={select === 1 ? "select" : ""}>동행 모집</li>
      <li className={select === 2 ? "select" : ""}>여행 질문</li>
    </PostsTabBlock>
  );
};

const PostsTabBlock = styled.ul`
  display: flex;
  gap: 10px;
  font-size: 1rem;
  font-weight: bold;
  padding: 20px 0px 10px 10px;
  color: gray;
  .select {
    color: black;
  }
`;
export default PostsTab;
