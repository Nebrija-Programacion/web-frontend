import PlanetsList from "@/components/PlanetsList";
import { PlanetsAPI } from "@/types";

export const getServerSideProps = async () => {
  const props: Array<{
    name: string;
    id: string;
  }> = [];
  try {
    const res = await fetch("https://swapi.dev/api/planets");
    const data: PlanetsAPI = await res.json();
    props.push(
      ...data.results.map((planet) => {
        const name = planet.name;
        // get id from url
        const id = planet.url.split("/").slice(-2)[0];
        return { name, id };
      })
    );

    let next = data.next;
    while (next) {
      console.log(next);
      const res = await fetch(next);
      const data: PlanetsAPI = await res.json();
      props.push(
        ...data.results.map((planet) => {
          const name = planet.name;
          // get id from url
          const id = planet.url.split("/").slice(-2)[0];
          return { name, id };
        })
      );
      next = data.next;
    }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: props,
    },
  };
};

type HomeProps = {
  data: Array<{
    name: string;
    id: string;
  }>;
};

export default function Home(props: HomeProps) {
  return <PlanetsList data={props.data} />;
}
