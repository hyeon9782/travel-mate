import styled from "styled-components";
import Places from "./Places";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";
import { useState, useEffect } from "react";
const CATEGORIES = [
  {
    ko: "맛집",
    en: "food",
  },
  {
    ko: "명소",
    en: "natural_feature",
  },
  {
    ko: "숙소",
    en: "lodging",
  },
];
const PlacesTab = () => {
  const [places, setPlaces] = useRecoilState(selectPlacesState);
  const [filterPlaces, setFilterPlaces] = useState(
    places.filter((place) => place.types.includes("food"))
  );
  const handleClick = (category: any) => {
    const newPlaces = places.filter((place) =>
      place.types.includes(category.en)
    );

    setFilterPlaces(newPlaces);
  };

  useEffect(() => {
    handleClick({ en: "food" });
  }, [places]);
  return (
    <PlacesTabBlock>
      <Categories>
        {CATEGORIES.map((category, index) => (
          <Category key={index} onClick={() => handleClick(category)}>
            {category.ko}
          </Category>
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
