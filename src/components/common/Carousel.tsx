import styled from "styled-components";

type Props = {
  list: any[];
  render: (props: any, key: number) => any;
};
const Carousel = ({ list, render }: Props) => {
  return (
    <CarouselContainer>
      {list && list.map((item, index) => render(item, index))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.article`
  display: flex;
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
  gap: 14px;

  &&::-webkit-scrollbar {
    display: none;
  }

  .box {
    /* flex: 0 0 auto; Let the box keep its original size */
    min-width: 300px; /* Set minimum width for each box */
    border-radius: 5px;
    background-color: gray;
  }
`;

export default Carousel;
