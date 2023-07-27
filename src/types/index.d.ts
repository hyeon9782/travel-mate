export type User = {
  email: string;
  name: string;
  picture: string;
  family_name: string;
  given_name: string;
};

export type City = {
  city: string;
  country: string;
  isDomestic: boolean;
  location: { lat: number; lng: number };
};

export type Plan = {
  plan_id: string;
  user_id: string;
  cities: City[];
  period: [];
  selectedPlaces: Place[];
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
