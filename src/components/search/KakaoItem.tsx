import { checkPlace } from "../../service/place";
import { Place, Plan } from "../../types";

type Props = {
  place: Place;
  planData: Plan;
  setPlanData: any;
};

const KakaoItem = ({ place, planData, setPlanData }: Props) => {
  const { name, user_ratings_total, rating } = place;

  const isSelect = checkPlace(place, planData.selectedPlaces);

  return <div>KakaoItem</div>;
};

export default KakaoItem;
