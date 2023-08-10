import styled, { keyframes } from "styled-components";

type Props = {
  width?: string;
  height: string;
  radius?: string;
};
const SkeletonElement = ({ width, height, radius }: Props) => {
  return (
    <SkeletonPlaceholder
      width={width}
      height={height}
      radius={radius}
    ></SkeletonPlaceholder>
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
  width?: string;
  height: string;
  radius?: string;
}>`
  width: 100%;
  height: ${(props) => `${props.height}`};
  border-radius: ${(props) => `${props.radius}`};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${SkeletonAnimation} 1.5s infinite;
`;

export default SkeletonElement;
