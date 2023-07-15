import styled from "styled-components";
import CityTag from "./CityTag";

const CitiesTag = ({ tags }) => {
  return (
    <CitiesTagBlock>
      {tags.map((tag, index) => (
        <CityTag key={index} tag={tag} />
      ))}
    </CitiesTagBlock>
  );
};

const CitiesTagBlock = styled.div`
  display: flex;
  gap: 10px;
  background-color: lightgray;
  padding: 10px;
`;

export default CitiesTag;
