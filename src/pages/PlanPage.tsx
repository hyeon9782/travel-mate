import styled from "styled-components";
import Days from "../components/days/Days";
import SearchMap from "../components/google/SearchMap";
import PlacesSearch from "../components/google/TestSearch";
import PlacesAutocomplete from "../components/google/Auto";
import Places from "../components/places/Places";

const PlanPage = () => {
  return (
    <PlanPageBlock>
      <Days />
      <Places />
      {/* <PlacesSearch /> */}
      <PlacesAutocomplete />
      {/* <SearchMap /> */}
    </PlanPageBlock>
  );
};

const PlanPageBlock = styled.section``;

export default PlanPage;
