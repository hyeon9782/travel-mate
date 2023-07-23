import styled from "styled-components";
import Places from "./Places";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { planState } from "../../store/planState";

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

const PlacesTab = ({ handleClick }: () => void) => {
  const planData = useRecoilValue(planState);

  const [selectedCategory, setSelectedCategory] = useState(0);

  const filterPlacesByCategory = (category: any) => {
    return planData.selectedPlaces.filter(
      (place) => place?.types.includes(category.en) && place?.day === 0
    );
  };

  const handleCategoryChange = (category: any, index: number) => {
    setSelectedCategory(index);
    return filterPlacesByCategory(category);
  };

  const filterPlaces = filterPlacesByCategory(CATEGORIES[selectedCategory]);

  return (
    <PlacesTabBlock>
      <Categories>
        {CATEGORIES.map((category, index) => (
          <Category
            key={index}
            onClick={() => handleCategoryChange(category, index)}
            isActive={index === selectedCategory}
          >
            {category.ko}
          </Category>
        ))}
      </Categories>
      <PlacesBlock>
        <Places places={filterPlaces} handleClick={handleClick} />
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
