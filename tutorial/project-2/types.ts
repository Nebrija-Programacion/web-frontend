export type CountryData = {
  currency: {
    code: string;
    name: string;
  };
  capital: string;
  population: number;
  name: string;
  region: string;
};

export type CityData = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  is_capital: boolean;
};
