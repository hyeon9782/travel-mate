export type User = {
  email: string;
  name: string;
  picture: string;
  family_name: string;
  given_name: string;
};

export type Post = {
  post_id?: string;
  title: string;
  content: string;
  tags: string[];
  user_id?: string;
  plan_id?: string;
};

export type City = {
  city: string;
  country: string;
  isDomestic: boolean;
  region: string;
  location: { lat: number; lng: number };
  related: string[];
  isSelect: boolean;
};

export type Plan = {
  plan_id: number;
  user_id: string;
  cities: City[];
  period: string[];
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
  types: string[];
  isSelect: boolean;
  day: number;
  order: number;
};
