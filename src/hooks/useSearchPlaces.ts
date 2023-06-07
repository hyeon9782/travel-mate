import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useSearchPlaces = () => {
  const queryClient = useQueryClient();
  const placesMutation = useMutation((keyword) =>
    axios.get(
      `http://localhost:4000/api/search?keyword=${keyword}&radius=${5000}&latitude=${
        searchData.cityLocation.lat
      }&longitude=${searchData.cityLocation.lng}`
    )
  );

  const handleSubmit = async (keyword: string) => {
    await placesMutation.mutateAsync(keyword);
  };

  const handleMutationSuccess = (data) => {
    queryClient.setQueryData("places", data);
    console.log(data);
  };

  const handleMutationError = (error) => {
    console.error(error);
  };

  placesMutation.isSuccess && handleMutationSuccess(placesMutation.data);
  placesMutation.isError && handleMutationError(placesMutation.error);

  return {
    handleSubmit,
    isLoading: placesMutation.isLoading,
  };
};
