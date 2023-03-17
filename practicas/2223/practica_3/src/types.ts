export type PlanetsAPI = {
  count: number;
  next?: string;
  previous?: string;
  results: Planet[];
};

export type PlanetAPI = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type Planet = Omit<PlanetAPI, "residents" | "films"> & {
  residents: Array<{
    name: string;
  }>;
  films: Array<{
    title: string;
  }>;
};

export type Planets = Omit<PlanetsAPI, "results"> & {
  results: Planet[];
};
