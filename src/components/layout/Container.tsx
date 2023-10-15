import styled from "styled-components";

// 모바일 웹이기 때문에 min-width를 사용
export const Container = styled.section`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 992px) {
    width: 400px;
  }

  @media (min-width: 1200px) {
    width: 400px;
  }
`;
