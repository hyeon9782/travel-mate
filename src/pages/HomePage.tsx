import Wrapper from "../components/layout/Wrapper";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <HomePageBlock>HomePage</HomePageBlock>
    </Wrapper>
  );
};

const HomePageBlock = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
`;

export default HomePage;
