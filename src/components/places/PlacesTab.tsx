import styled from "styled-components";

const PlacesTab = () => {
  return (
    <PlacesTabBlock>
      <Categories>
        <div>맛집</div>
        <div>명소</div>
        <div>숙소</div>
      </Categories>
    </PlacesTabBlock>
  );
};

const PlacesTabBlock = styled.article`
  height: 20%;
`;

const Categories = styled.div`
  display: flex;
`;

export default PlacesTab;
