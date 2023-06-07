import styled from "styled-components";

type Props = {
  size?: string;
  subTitle?: string;
  children: React.ReactNode;
};

const Text = ({ children }: Props) => {
  return <TextBlock>{children}</TextBlock>;
};

const TextBlock = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

export default Text;
