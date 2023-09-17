import styled from "styled-components";

const { kakao } = window;
const SearchPlacesKakao = () => {
  const ps = new kakao.maps.services.Places();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const keyword = e.target.keyword.value;

    ps.keywordSearch(keyword, placesSearchCB);

    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <SearchInputKakaoBlock
        type="text"
        name="keyword"
        placeholder="가고 싶은 장소를 검색해보세요."
      />
    </form>
  );
};

const SearchInputKakaoBlock = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
`;

export default SearchPlacesKakao;
