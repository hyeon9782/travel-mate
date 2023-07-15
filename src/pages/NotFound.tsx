import styled from "styled-components";

const NotFound = () => {
  return <NotFoundBlock>404 Not Found</NotFoundBlock>;
};

const NotFoundBlock = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  font-size: 3rem;
  font-weight: bold;
`;

export default NotFound;
