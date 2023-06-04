import axios from "axios";

export const useSearchPlaces = (keyword: string) => {
  return axios.get(`/api/search?keyword=${keyword}`);
};
