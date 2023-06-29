import styled, { StyledComponent } from "styled-components";
import Places from "./Places";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectPlacesState } from "../../store/selectPlacesState";
import { useState, useEffect } from "react";
import { Place } from "../../types";
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

type Props = {
  selectPlace: (place: Place) => void;
};
const PlacesTab = ({ selectPlace }): Props => {
  const [places, setPlaces] = useRecoilState(selectPlacesState);
  const [currentCategory, setCurrentCategory] = useState(0);

  const [filterPlaces, setFilterPlaces] = useState(
    places.filter((place) => place.types.includes("food"))
  );

  const handleClick = (category: any, index: number) => {
    const newPlaces = places.filter((place) =>
      place.types.includes(category.en)
    );

    setFilterPlaces(newPlaces);

    setCurrentCategory(index);
  };

  useEffect(() => {
    handleClick({ en: "food" }, 0);
  }, [places]);

  return (
    <PlacesTabBlock>
      <Categories>
        {CATEGORIES.map((category, index) => (
          <Category
            key={index}
            onClick={() => handleClick(category, index)}
            isActive={index === currentCategory}
          >
            {category.ko}
          </Category>
        ))}
      </Categories>
      <PlacesBlock>
        <Places places={filterPlaces} handleClick={selectPlace} />
      </PlacesBlock>
    </PlacesTabBlock>
  );
};

const PlacesTabBlock = styled.article`
  /* height: 20%; */
  margin-bottom: 30px;
`;

const PlacesBlock = styled.div`
  min-height: 122px;
  background-color: lightgray;
`;

const Categories = styled.div`
  display: flex;
`;

const Category = styled.div<{ isActive?: boolean }>`
  font-size: 1.3rem;
  padding: 10px;
  background-color: ${(props) => (props.isActive ? "black" : "lightgray")};
  color: ${(props) => (props.isActive ? "white" : "black")};
`;

export default PlacesTab;
