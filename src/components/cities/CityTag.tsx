import styled from "styled-components";
import { filteringCity } from "../../service/city";
import { useSetRecoilState } from "recoil";
import { citiesState } from "../../store/citiesState";
type Props = {
  children: any;
};
const CityTag = ({ children }: Props) => {
  const setCities = useSetRecoilState(citiesState);

  return (
    <CityTagBlock onClick={() => filteringCity(children, setCities)}>
      <ContentWrapper>{children}</ContentWrapper>
    </CityTagBlock>
  );
};

const CityTagBlock = styled.div`
  width: fit-content; /* 내용물에 맞게 크기 조정 */
  border-radius: 15px;
  background-color: white;
  border: 1px solid lightgray;
  font-weight: 400;
  font-size: 0.8rem;
`;

const ContentWrapper = styled.div`
  display: inline-block; /* 내용물을 inline-block으로 설정하여 패딩값을 포함한 크기 조정 */
  padding: 10px 15px;
`;

export default CityTag;
