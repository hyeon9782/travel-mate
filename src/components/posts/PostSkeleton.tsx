import SkeletonElement from "../common/SkeletonElement";
import styled from "styled-components";

const PostSkeleton = () => {
  return (
    <PostSkeletonBlock>
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonElement
          width="100%"
          height="140.41px"
          radius="10px"
          color="lightgray"
        >
          <div className="box" key={index}>
            <div className="head">
              <SkeletonElement width="78.19px" height="24.41px" radius="5px" />
              <SkeletonElement width="100.97px" height="14.41px" radius="5px" />
            </div>

            <SkeletonElement width="200px" height="19.2px" radius="10px" />
            <div className="tag">
              <SkeletonElement width="54.11px" height="24.8px" radius="15px" />
              <SkeletonElement width="54.11px" height="24.8px" radius="15px" />
              <SkeletonElement width="54.11px" height="24.8px" radius="15px" />
            </div>
            <div className="footer">
              <div className="user-box">
                <SkeletonElement width="20px" height="20px" radius="50%" />
                <SkeletonElement
                  width="47.61px"
                  height="14.41px"
                  radius="15px"
                />
              </div>
              <SkeletonElement width="36.52px" height="16px" radius="5px" />
            </div>
          </div>
        </SkeletonElement>
      ))}
    </PostSkeletonBlock>
  );
};

const PostSkeletonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 10px 10px 10px;

  .box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;

    .head {
      display: flex;
      justify-content: space-between;
    }

    .tag {
      display: flex;
      gap: 5px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      .user-box {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
`;

export default PostSkeleton;
