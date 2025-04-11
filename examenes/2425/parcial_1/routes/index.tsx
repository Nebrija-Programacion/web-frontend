import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const palabra = url.searchParams.get("word");
    if (palabra && palabra !== "") {
      // redirect
      const headers = new Headers();
      headers.set("location", `/buscar/${palabra}`);
      return new Response(null, {
        status: 303, // See Other
        headers,
      });
    }
    return ctx.render();
  },
};

const Page = () => {
  return (
    <div>
      <form method="GET" action="/">
        <input name="word" type="texto" placeholder="Introduce palabra" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Page;
