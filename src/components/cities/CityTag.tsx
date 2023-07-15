import styled from "styled-components";
type Props = {
  tag: string;
};
const CityTag = ({ tag }: Props) => {
  return <CityTagBlock>{tag}</CityTagBlock>;
};

const CityTagBlock = styled.div`
  border-radius: 15px;
  background-color: white;
  font-weight: 400;
  padding: 5px 10px;
  font-size: 0.8rem;
`;

export default CityTag;
