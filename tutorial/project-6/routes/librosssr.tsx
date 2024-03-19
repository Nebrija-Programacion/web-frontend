import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Book } from "../types.ts";
import Libros from "../components/Libros.tsx";

type Data = Book[];

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const API_TOKEN = Deno.env.get("API_TOKEN");
    const API_URL = Deno.env.get("API_URL");

    if (!API_TOKEN || !API_URL) {
      return new Response("API_TOKEN and API_URL are required", {
        status: 500,
      });
    }

    const response = await fetch(API_URL + "/book", {
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
      },
    });

    if (!response.ok) {
      return new Response("Error fetching books", { status: 500 });
    }

    const data = await response.json();
    return ctx.render(data.docs);
  },
};

const Page = (props: PageProps<Data>) => {
  return <Libros docs={props.data} />;
};

export default Page;
