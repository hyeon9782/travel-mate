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
  category: string;
  deadline: string;
  user_name?: string;
  views?: number;
  user_id?: string;
  plan_id?: string;
};

export type City = Pick<Geometry, "location"> & {
  city: string;
  country: string;
  isDomestic: boolean;
  region: string;
  related: string[];
  isSelect: boolean;
};

export type Plan = {
  title: string;
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
  geometry: Geometry;
  memo: string;
  types: string[];
  isSelect: boolean;
  day: number;
  order: number;
};

export type Geometry = {
  location: {
    lat: number;
    lng: number;
  };
};

export type Dialog = {
  Component: React.ComponentType<any>;
  props: any;
};

export type DialogsContextType = {
  open: (Component: React.ComponentType<any>, props: any) => void;
  close: (Component: React.ComponentType<any>) => void;
};

export type DialogComponentProps = {
  onClose: () => void;
  onSubmit: (value: any) => void;
};
