import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { CityData } from "@/types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, CityData[]>) => {
    const { city } = ctx.params;
    const API_KEY = Deno.env.get("NINJA_API_KEY");
    if (!API_KEY) {
      return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
    }
    const url = "https://api.api-ninjas.com/v1/city?name=" + city + "&limit=10";
    try {
      const response = await axios.get<CityData[]>(url, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (response.data.length === 0) {
        return new Response("City not found", { status: 404 });
      }
      return ctx.render(response.data);
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<CityData[]>) => {
  const data = props.data;
  return (
    <>
      {data.map((city) => (
        <div>
          <h1>{city.name}</h1>
          <p>
            Country: <a href={`/country/${city.country}`}>{city.country}</a>
          </p>
          <p>Population: {city.population}</p>
          <p>Latitude: {city.latitude}</p>
          <p>Longitude: {city.longitude}</p>
          <p>Capital: {city.is_capital ? "Yes" : "No"}</p>
          <hr />
          <br />
        </div>
      ))}
      <a href="/">Volver al formulario de búsqueda</a>
    </>
  );
};

export default Page;
