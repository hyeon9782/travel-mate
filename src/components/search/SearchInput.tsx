import styled from "styled-components";
type Props = {
  onSubmit: (e: any) => void;
};
const SearchInput = ({ onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <SearchInputBlock
        type="text"
        placeholder="가고 싶은 장소를 검새해보세요."
      />
    </form>
  );
};

const SearchInputBlock = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
`;

export default SearchInput;
