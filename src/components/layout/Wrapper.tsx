import styled from "styled-components";
type Props = {
  children: React.ReactElement;
};
const Wrapper = ({ children }: Props) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

const WrapperBlock = styled.div`
  box-sizing: border-box;
  margin: 0px auto;
  width: 1200px;
  padding: 30px 20px;
  height: calc(100vh - 52px);
`;

export default Wrapper;
