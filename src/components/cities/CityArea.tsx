import styled from "styled-components";
import CityTab from "./CityTab";

const CityArea = () => {
  return (
    <CityAreaBlock>
      <CityTab />
    </CityAreaBlock>
  );
};

const CityAreaBlock = styled.section`
  box-sizing: border-box;
  /* height: 570px; */
`;

export default CityArea;
