export type City = {
  city: string;
  country: string;
  isDomestic: boolean;
  location: { lat: number; lng: number };
};

export type Plan = {
  title: string;
  startDate: string;
  endDate: string;
  city: [];
};

export type Place = {
  place_id: string;
  name: string;
  user_ratings_total: string;
  rating: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  isSelect: boolean;
  day: number;
  order: number;
};
