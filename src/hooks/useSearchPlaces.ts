import { useQuery } from "@tanstack/react-query";
import { searchPlacesGoogle, searchPlacesKakao } from "../service/place";

export const useSearchPlaces = (keyword: string, isDomestic: boolean) => {
  return useQuery({
    queryKey: ["search-places", isDomestic, keyword],
    queryFn: () => {
      if (isDomestic) {
        return searchPlacesKakao(keyword);
      } else {
        return searchPlacesGoogle(keyword);
      }
    },
    enabled: !!keyword,
  });
};
