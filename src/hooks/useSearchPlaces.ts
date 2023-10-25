import { useQuery } from "@tanstack/react-query";
import { searchPlacesGoogle, searchPlacesKakao } from "../service/place";

export const useSearchPlaces = (keyword: string, isDomestic: boolean) => {
  return useQuery({
    queryKey: ["search-places", keyword],
    queryFn: async () => {
      if (isDomestic) {
        return await searchPlacesKakao(keyword);
      } else {
        return await searchPlacesGoogle(keyword);
      }
    },
    enabled: !!keyword,
  });
};
