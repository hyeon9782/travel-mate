import styled from "styled-components";
type Props = {
  children: React.ReactElement;
};
const Wrapper = ({ children }: Props) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

const WrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0px auto;
  width: 1200px;
  padding: 0px 20px;
  height: calc(100vh - 52px);
`;

export default Wrapper;
