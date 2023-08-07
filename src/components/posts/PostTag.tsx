import styled from "styled-components";

type Props = {
  tag: string;
};
const PostTag = ({ tag }: Props) => {
  return <PostTagBlock>{tag}</PostTagBlock>;
};

const PostTagBlock = styled.div`
  padding: 5px 8px;
  border-radius: 15px;
  border: 1px solid black;
  font-size: 0.8rem;
`;

export default PostTag;
