export type City = {
  city: string;
  country: string;
  isDomestic: boolean;
  location: { lat: number; lng: number };
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
};
