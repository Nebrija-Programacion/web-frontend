import { PlanetAPI, PlanetsAPI } from "@/types";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const PlanetsList: FC<{ page: string }> = ({ page }) => {
  const [planets, setPlanets] = useState<PlanetsAPI | undefined>(undefined);

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
      const data: PlanetsAPI = await res.json();
      setPlanets(data);
    };
    fetchPlanets();
  }, []);

  if (!planets) return <div>Loading...</div>;

  return (
    <div>
      <h1>Planets (page: {page})</h1>
      <ul>
        {planets.results.map((planet) => {
          // get the id from the url
          const id = planet.url.split("/").slice(-2)[0];
          return (
            <li key={id}>
              <Link href={`/planet/${id}`}>{planet.name}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        {planets.previous && (
          <Link href={`/planets/${parseInt(page) - 1}`}>Previous</Link>
        )}{" "}
        |{" "}
        {planets.next && (
          <Link href={`/planets/${parseInt(page) + 1}`}>Next</Link>
        )}
      </div>
    </div>
  );
};

export default PlanetsList;
