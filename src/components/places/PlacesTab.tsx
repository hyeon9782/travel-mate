import styled from "styled-components";
import Places from "./Places";
import { useState } from "react";
import { Plan } from "../../types";
import { CATEGORIES } from "../../constants/categories";

type Props = {
  handleClick: (args: any) => void;
  planData: Plan;
};
const PlacesTab = ({ handleClick, planData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const filterPlacesByCategory = (category: any) => {
    if (category.en === "") {
      return planData.selectedPlaces.filter((selectedPlace) => {
        const matchingTypes = [
          "restaurant",
          "cafe",
          "natural_feature",
          "lodging",
        ].filter((type) => selectedPlace?.types.includes(type));
        console.log(matchingTypes.length === 0);
        console.log(matchingTypes[0] !== "");

        return matchingTypes.length === 0;
      });
    }

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
        {filterPlaces.length === 0 ? (
          <NoPlaceBlock>장소를 추가해주세요</NoPlaceBlock>
        ) : (
          <Places places={filterPlaces} handleClick={handleClick} />
        )}
      </PlacesBlock>
    </PlacesTabBlock>
  );
};

const NoPlaceBlock = styled.div`
  background-color: lightgray;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: bold;
  font-size: 1.2rem;
`;

const PlacesTabBlock = styled.article`
  padding: 0px 10px;
`;

const PlacesBlock = styled.div`
  height: 50px;
`;

const Categories = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 0;
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
