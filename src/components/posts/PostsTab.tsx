import styled from "styled-components";
import useDialogs from "../../hooks/useDialogs";
import { dialogs } from "../dialog/Dialogs";
type Props = {
  onClick: (category: string) => void;
  category: string;
};
const PostsTab = ({ onClick, category }: Props) => {
  const { openDialog } = useDialogs();
  const handleClick = () => {
    console.log("안녕");

    openDialog(dialogs.ConfirmDialog, {
      onSubmit: (value) => {
        console.log(value);
        console.log("비즈니스 로직 처리");
      },
    });
  };
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
      <li
        onClick={handleClick}
        className={category === "여행 질문" ? "select" : ""}
      >
        모달
      </li>
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
