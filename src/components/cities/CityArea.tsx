import styled from "styled-components";
import CityTab from "./CityTab";

const CityArea = (props) => {
  return (
    <CityAreaBlock>
      <CityTab {...props} />
    </CityAreaBlock>
  );
};

const CityAreaBlock = styled.section`
  box-sizing: border-box;
  margin-bottom: 200px;
`;

export default CityArea;
