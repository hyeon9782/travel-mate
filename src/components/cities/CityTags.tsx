import styled from "styled-components";
import CityTag from "./CityTag";

const CityTags = ({ tags }: any) => {
  return (
    <CityTagsBlock>
      {tags.map((tag, index) => (
        <CityTag key={index} tag={tag} />
      ))}
    </CityTagsBlock>
  );
};

const CityTagsBlock = styled.div`
  display: flex;
  gap: 10px;
  background-color: #faf9fc;
  padding: 10px;
`;

export default CityTags;
