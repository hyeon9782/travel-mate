export type City = {
  city: string;
  country: string;
  isDomestic: boolean;
  location: { lat: number; lng: number };
};

export type Place = {
  name: string;
  user_ratings_total: string;
  rating: string;
};
