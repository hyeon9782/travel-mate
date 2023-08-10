import SkeletonElement from "../common/SkeletonElement";
import styled from "styled-components";

const PostSkeleton = () => {
  return (
    <PostSkeletonBlock>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <SkeletonElement key={index} height="140.41px" radius="10px" />
      ))}
    </PostSkeletonBlock>
  );
};

const PostSkeletonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export default PostSkeleton;
