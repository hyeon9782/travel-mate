import styled, { css } from "styled-components";

type Props = {
  text: string;
  color?: string;
  size?: "big" | "small";
  onClick: (args?: any) => void;
};

const Button = ({ text, color, size, onClick }: Props) => {
  return (
    <ButtonBlock color={color} onClick={onClick} size={size}>
      {text}
    </ButtonBlock>
  );
};

const ButtonBlock = styled.button<{ color?: string; size?: "big" | "small" }>`
  background-color: white;
  border-radius: 5px;
  border: 2px solid ${(props) => props.color || "black"};
  color: ${(props) => props.color || "black"};
  font-weight: bold;
  padding: 5px 10px;

  ${(props) => {
    switch (props.size) {
      case "big":
        return css`
          padding: 15px 30px;
          font-size: 1.5rem;
        `;
      case "small":
        return css`
          padding: 5px 10px;
          font-size: 1rem;
        `;
    }
  }}

  &:hover {
    background-color: #e9f8d7;
  }
`;

export default Button;
