import styled from "styled-components";

const Text = ({ children }: { children: string }) => {
  return <TextBlock>{children}</TextBlock>;
};

const TextBlock = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

export default Text;
