import styled from "styled-components";
type Props = {
  children: any;
};
const CityTag = ({ children }: Props) => {
  return <CityTagBlock>{children}</CityTagBlock>;
};

const CityTagBlock = styled.div`
  width: 70px;
  border-radius: 15px;
  background-color: white;
  font-weight: 400;
  padding: 10px 15px;
  font-size: 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
`;

export default CityTag;
