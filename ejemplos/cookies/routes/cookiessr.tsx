import { FreshContext, Handlers } from "$fresh/server.ts";
import CookieSSR from "../components/CookieSSR.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    const age = url.searchParams.get("age");

    console.log("name", name);
    console.log("age", age);

    const headers = new Headers();
    if (name && age) {
      const date = new Date();
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      headers.append("Set-Cookie", `name=${encodeURIComponent(name)}; expires=${date.toUTCString()}; path=/`);
      headers.append("Set-Cookie", `age=${encodeURIComponent(age)}; expires=${date.toUTCString()}; path=/`);
    }

  return ctx.render(null,{
    headers,
  });
}}

const Page = () => <CookieSSR />


export default Page;