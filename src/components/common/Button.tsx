import styled from "styled-components";

type Props = {
  text: string;
  color?: string;
};

const Button = ({ text, color }: Props) => {
  return <ButtonBlock color={color}>{text}</ButtonBlock>;
};

const ButtonBlock = styled.button<{ color?: string }>`
  background-color: white;
  border-radius: 5px;
  border: 2px solid ${(props) => props.color || "black"};
  color: ${(props) => props.color || "black"};
  font-weight: bold;
  padding: 5px 10px;

  &:hover {
    background-color: #e9f8d7;
  }
`;

export default Button;
