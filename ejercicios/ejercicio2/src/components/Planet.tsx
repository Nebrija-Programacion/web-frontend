import { Planet } from "@/types";
import Link from "next/link";

const PlanetComponent = ({ data }: { data: Planet }) => (
  <div>
    <Link href="/">Back</Link>
    <h1>{data.name}</h1>
    <p>Rotation period: {data.rotation_period}</p>
    <p>Orbital period: {data.orbital_period}</p>
    <p>Diameter: {data.diameter}</p>
    <p>Climate: {data.climate}</p>
    <p>Gravity: {data.gravity}</p>
    <p>Terrain: {data.terrain}</p>
    <p>Surface water: {data.surface_water}</p>
    <p>Population: {data.population}</p>
    <h2>Residents</h2>
    <ul>
      {data.residents.map((resident) => (
        <li key={resident.name}>{resident.name}</li>
      ))}
    </ul>
    <h2>Films</h2>
    <ul>
      {data.films.map((film) => (
        <li key={film.title}>{film.title}</li>
      ))}
    </ul>
  </div>
);

export default PlanetComponent;
