import Login from "../components/Login.tsx";
import { FreshContext, Handlers, RouteConfig } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";
import jwt from "jsonwebtoken";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const form = await req.formData();
    const username = form.get("username")?.toString() || "";
    const password = form.get("password")?.toString() || "";

    if (username === "a" && password === "a") {
      // create JWT token and set it as a cookie
      const token = jwt.sign({ username }, Deno.env.get("JWT_SECRET"), {
        expiresIn: "24h",
      });
      const headers = new Headers();

      setCookie(headers, {
        name: "auth",
        value: token,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", "/");
      return new Response(null, {
        status: 303, // "See Other"
        headers,
      });
    } else {
      return ctx.render();
    }
  },
};

const Page = () => <Login />;

export default Page;
