import styled from "styled-components";
type Props = {
  children: React.ReactElement;
};
const Wrapper = ({ children }: Props) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

const WrapperBlock = styled.div`
  margin: 0px auto;
  width: 1200px;
  padding: 30px 20px;
`;

export default Wrapper;
