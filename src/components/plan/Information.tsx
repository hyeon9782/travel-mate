import styled from "styled-components";
import Input from "../common/Input";

const Information = () => {
  return (
    <InformationBlock>
      <RegionBlock>
        <Input />
      </RegionBlock>
      <DateBlock></DateBlock>
    </InformationBlock>
  );
};

const InformationBlock = styled.div`
  display: flex;
`;

const RegionBlock = styled.div``;

const DateBlock = styled.div``;

export default Information;
