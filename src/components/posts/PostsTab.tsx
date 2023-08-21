import styled from "styled-components";
import ShareButton from "../../libs/kakao/ShareButton";
type Props = {
  onClick: (category: string) => void;
  category: string;
};
const PostsTab = ({ onClick, category }: Props) => {
  return (
    <PostsTabBlock>
      <li
        onClick={() => onClick("전체")}
        className={category === "전체" ? "select" : ""}
      >
        전체
      </li>
      <li
        onClick={() => onClick("동행 모집")}
        className={category === "동행 모집" ? "select" : ""}
      >
        동행 모집
      </li>
      <li
        onClick={() => onClick("여행 질문")}
        className={category === "여행 질문" ? "select" : ""}
      >
        여행 질문
      </li>
      <ShareButton
        title="일본 여행"
        description="#맛집, #먹부림, #보빈이"
        imageUrl={
          "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png"
        }
        buttonTitle="여행 코스 확인"
      />
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
