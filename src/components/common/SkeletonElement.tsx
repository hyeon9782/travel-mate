import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  width: string;
  height: string;
  radius?: string;
  children?: ReactNode;
  color?: string;
};
const SkeletonElement = ({ width, height, radius, children, color }: Props) => {
  return (
    <SkeletonPlaceholder
      width={width}
      height={height}
      radius={radius}
      color={color}
    >
      {children}
    </SkeletonPlaceholder>
  );
};

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

const SkeletonPlaceholder = styled.div<{
  width: string;
  height: string;
  radius?: string;
  color?: string;
}>`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  border-radius: ${({ radius }) => `${radius}`};
  background: linear-gradient(
    90deg,
    ${({ color }) => color || "#f0f0f0"} 25%,
    #e0e0e0 50%,
    ${({ color }) => color || "#f0f0f0"} 75%
  );
  /* background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); */
  background-size: 200% 100%;
  animation: ${SkeletonAnimation} 1.5s infinite;
`;

export default SkeletonElement;
