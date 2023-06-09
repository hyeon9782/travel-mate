import { useRecoilValue } from "recoil";
import Map from "./Map";
import { searchState } from "../../store/searchState";

const RenderMap = () => {
  const searchData = useRecoilValue(searchState);
  return <Map position={searchData}></Map>;
};

export default RenderMap;
