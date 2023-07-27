import styled from "styled-components";

type Props = {
  tag: string;
};
const PostTag = ({ tag }: Props) => {
  return <PostTagBlock>{tag}</PostTagBlock>;
};

const PostTagBlock = styled.div`
  padding: 6px 10px;
  border-radius: 15px;
  border: 1px solid black;
`;

export default PostTag;
