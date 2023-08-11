import styled from "styled-components";
import SkeletonElement from "../common/SkeletonElement";

const PostDetailSkeleton = () => {
  return (
    <PostDetailSkeletonBlock>
      <SkeletonElement width="28.8px" height="28.8px" radius="5px" />
      <SkeletonElement width="300px" height="53px" radius="5px" />
      <div className="head">
        <div className="user-box">
          <SkeletonElement width="30px" height="30px" radius="50%" />
          <SkeletonElement width="56.64px" height="17.59px" radius="5px" />
        </div>
        <SkeletonElement width="77.33px" height="32px" radius="5px" />
      </div>
      <SkeletonElement width="100%" height="500px" radius="5px" />
    </PostDetailSkeletonBlock>
  );
};

const PostDetailSkeletonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  .head {
    display: flex;
    justify-content: space-between;

    .user-box {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export default PostDetailSkeleton;
