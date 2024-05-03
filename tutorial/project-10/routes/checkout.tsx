import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Country } from "../types.ts";
import CheckOut from "../components/CheckOut.tsx";

type CountryResponse = {
  data: { [key: string]: { country: string } };
};

export const handler: Handlers = {
  GET: async (req, ctx: FreshContext<unknown, { countries: Country[] }>) => {
    const response = await fetch(
      "https://api.first.org/data/v1/countries?region=europe"
    );
    if (!response.ok) {
      return new Response(null, {
        status: 500,
      });
    }
    const data: CountryResponse = await response.json();
    const countries: Country[] = Object.entries(data.data).map(
      ([code, { country }]) => ({
        code,
        name: country,
      })
    );
    return ctx.render({ countries });
  },
};

const Page = (props: PageProps<{ countries: Country[] }>) => {
  return <CheckOut countries={props.data.countries} />;
};

export default Page;
