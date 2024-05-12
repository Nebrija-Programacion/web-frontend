import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import jwt from "jsonwebtoken";

type State = {
  user: string;
};

export async function handler(req: Request, ctx: FreshContext<State>) {
  // check route, if not route, pass to next middleware
  if (ctx.destination !== "route") {
    const resp = await ctx.next();
    return resp;
  }

  // if login route, pass to next middleware
  if (ctx.route === "/login") {
    const resp = await ctx.next();
    return resp;
  }

  const { auth } = getCookies(req.headers);
  if (!auth) {
    // redirect to login if no auth cookie
    return new Response("", {
      status: 307,
      headers: { location: "/login" },
    });
  }

  const payload = jwt.verify(auth, Deno.env.get("JWT_SECRET"));

  if (!payload) {
    // redirect to login if invalid token
    return new Response("", {
      status: 307,
      headers: { location: "/login" },
    });
  }

  ctx.state.user = payload.username;
  const resp = await ctx.next();
  return resp;
}
