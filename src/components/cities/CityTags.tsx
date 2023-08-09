import styled from "styled-components";
import CityTag from "./CityTag";
import Carousel from "../common/Carousel";
type Props = {
  tags: string[];
};
const CityTags = ({ tags }: Props) => {
  const render = (props: any, key: number) => {
    return <CityTag key={key}>{props}</CityTag>;
  };
  return (
    <CityTagsBlock>
      <Carousel list={tags} render={render} />
    </CityTagsBlock>
  );
};

const CityTagsBlock = styled.div`
  background-color: #faf9fc;
  padding: 10px;
`;

export default CityTags;
