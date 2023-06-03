import styled from "styled-components";
import Days from "../components/days/Days";
import SearchMap from "../components/google/SearchMap";
import PlacesSearch from "../components/google/TestSearch";
import PlacesAutocomplete from "../components/google/Auto";
import Places from "../components/places/Places";
import Step from "../components/plan/Step";
import { useState } from "react";
import Steps from "../components/plan/Steps";

const PlanPage = () => {
  return (
    <PlanPageBlock>
      <Steps steps={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]} />
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
