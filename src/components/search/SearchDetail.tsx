import styled from "styled-components";
type Props = {
  place: object;
};
const SearchDetail = ({ place }: Props) => {
  return <DetailBlock>디테일</DetailBlock>;
};

const DetailBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding: 10px;
`;

export default SearchDetail;
