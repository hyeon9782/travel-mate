import styled from "styled-components";

const PostsTab = () => {
  return (
    <PostsTabBlock>
      <li>전체ㅣ</li>
      <li>동행 모집ㅣ</li>
      <li>여행 질문</li>
    </PostsTabBlock>
  );
};

const PostsTabBlock = styled.ul`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 10px 0px 10px;
`;
export default PostsTab;
