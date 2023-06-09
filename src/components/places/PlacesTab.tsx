import styled from "styled-components";
import Places from "./Places";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";
import { useState } from "react";
const CATEGORIES = ["맛집", "명소", "숙소"];
const PlacesTab = () => {
  const [places, setPlaces] = useRecoilState(selectPlacesState);
  const [filterPlaces, setFilterPlaces] = useState([]);
  const handleClick = (category: string) => {
    const newPlaces = places.filter((place) => place.type.includes(category));
    setFilterPlaces(newPlaces);
  };
  return (
    <PlacesTabBlock>
      <Categories>
        {CATEGORIES.map((category) => (
          <Category onClick={() => handleClick(category)}>{category}</Category>
        ))}
      </Categories>
      <Places places={filterPlaces} />
    </PlacesTabBlock>
  );
};

const PlacesTabBlock = styled.article`
  height: 20%;
`;

const Categories = styled.div`
  display: flex;
`;

const Category = styled.div`
  font-size: 1.3rem;
  padding: 10px;
  background-color: lightgray;
`;

export default PlacesTab;
