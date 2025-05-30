import { FreshContext, Handler } from "$fresh/server.ts";
import { resetPropWarnings } from "preact/debug/src/index.d.ts";

type State = {
  dni: string;
}

export const handler = async (req: Request, ctx: FreshContext<State>) => {
  // check if cookie exists
  console.log("Middleware for /characters");
  const cookie = req.headers.get("Cookie");
  if (cookie && cookie.includes("dni=")) {
    // if cookie exists, redirect to /greet
    
    const dni = cookie.split("dni=")[1].split(";")[0];
    // verifico en mongo si el dni existe
    console.log("DNI from cookie: ", dni);
    ctx.state.dni =  dni ;
    const resp = await ctx.next();
    return resp;
  } else {
    // redirect to /login
    const headers = new Headers();
    headers.set("Location", "/");
    return new Response("Redirecting to /", {
      status: 302,
      headers,
    });
  }
};




