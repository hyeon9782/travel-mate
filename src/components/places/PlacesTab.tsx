import styled from "styled-components";
import Places from "./Places";
import { useRecoilState } from "recoil";
import { selectedPlacesState } from "../../store/selectedPlacesState";
import { useState, useEffect } from "react";
import { changeTab } from "../../service/place";
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

const PlacesTab = (props) => {
  console.log("탭");
  console.log(props);
  const [selectedPlaces, setSelectedPlaces] =
    useRecoilState(selectedPlacesState);
  const [currentCategory, setCurrentCategory] = useState(0);

  const [filterPlaces, setFilterPlaces] = useState(
    selectedPlaces.filter((place) => place.types.includes("food"))
  );

  useEffect(() => {
    changeTab(
      { en: "food" },
      0,
      selectedPlaces,
      setFilterPlaces,
      setCurrentCategory
    );
  }, [selectedPlaces]);

  return (
    <PlacesTabBlock>
      <Categories>
        {CATEGORIES.map((category, index) => (
          <Category
            key={index}
            onClick={() =>
              changeTab(
                category,
                index,
                selectedPlaces,
                setFilterPlaces,
                setCurrentCategory
              )
            }
            isActive={index === currentCategory}
          >
            {category.ko}
          </Category>
        ))}
      </Categories>
      <PlacesBlock>
        <Places places={filterPlaces} {...props} />
      </PlacesBlock>
    </PlacesTabBlock>
  );
};

const PlacesTabBlock = styled.article`
  padding: 10px;
`;

const PlacesBlock = styled.div`
  min-height: 100px;
`;

const Categories = styled.div`
  display: flex;
  gap: 10px;
`;

const Category = styled.div<{ isActive?: boolean }>`
  font-size: 0.8rem;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid blue;
  background-color: ${(props) => (props.isActive ? "blue" : "white")};
  color: ${(props) => (props.isActive ? "white" : "blue")};
`;

export default PlacesTab;
