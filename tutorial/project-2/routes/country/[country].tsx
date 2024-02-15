import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { CountryData } from "@/types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, CountryData>) => {
    const { country } = ctx.params;
    const API_KEY = Deno.env.get("NINJA_API_KEY");
    if (!API_KEY) {
      return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
    }
    const url = "https://api.api-ninjas.com/v1/country?name=" + country;
    try {
      const response = await axios.get<CountryData[]>(url, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (response.data.length === 0) {
        return new Response("Country not found", { status: 404 });
      }
      return ctx.render(response.data[0]);
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<CountryData>) => {
  const data = props.data;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>
        Capital: <a href={`/city/${data.capital}`}>{data.capital}</a>
      </p>
      <p>Population: {data.population}</p>
      <p>Region: {data.region}</p>
      <p>Moneda: {data.currency.name}</p>
      <hr />
      <br />
      <div>
        <a href="/">Volver al formulario de búsqueda</a>
      </div>
    </div>
  );
};

export default Page;
