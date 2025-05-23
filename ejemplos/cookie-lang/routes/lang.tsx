import {  Handlers, FreshContext } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const headers = req.headers;
    const cookies = headers.get("Cookie");
    const lang = cookies?.split(";").find((cookie) => cookie.trim().startsWith("lang="))?.split("=")[1];

    const header = new Headers();
    header.append("Set-Cookie", `lucia=andres; path=/`);
    return ctx.render(lang, {
      headers: header,
    });
  }
}

const Page = ({ data }: { data: string }) => {
  return (
    <div>
      {data === "en" ? <h1>Hello world</h1> : <h1>Hola mundo</h1>}
    </div>
  )
}

export default Page;