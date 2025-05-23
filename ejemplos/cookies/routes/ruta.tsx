import { Handlers, FreshContext } from "$fresh/server.ts";
import { getCookies } from "@std/http/cookie";
export const handler: Handlers = {
  GET: (req:Request, ctx: FreshContext) => {
/*    const cookie = req.headers.get("cookie");
    const cookies = cookie ? cookie.split("; ") : [];
    const name = cookies.find((row) => row.startsWith("name="));
    const value = decodeURIComponent(name ? name.split("=")[1] : "");
    */
    const cookies = getCookies(req.headers);
    const name = cookies.name;

    const headers = new Headers();
    headers.set("Set-Cookie", `ssrname=${encodeURIComponent(name + name)}; Path=/`);
    return ctx.render(name, {
      headers,
    });
  }
}

const Page = ({ data }: { data: string }) => {
  return (
    <div>
      <h1>Cookie</h1>
      <p>Cookie: {data}</p>
      <a href="/">Volver</a>
    </div>
  );
}

export default Page;