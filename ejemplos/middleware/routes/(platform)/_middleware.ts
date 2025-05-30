import { FreshContext, Handler, MiddlewareHandler } from "$fresh/server.ts";

type State = {
  name: string;
}

export const handler:MiddlewareHandler<State> = async (req: Request, ctx: FreshContext<State>) => {
  const headers = req.headers;
  const cookie = headers.get("Cookie");
  const cookies = cookie?.split(";");
  const name_cookie = cookies?.find(c => c.trim().startsWith("name="));
  if(name_cookie){
    const userName = name_cookie?.split("=")[1];
    ctx.state = {name: userName};
    const next = await ctx.next();
    return next;
  }

  return new Response(null,
    {
      status: 302,
      headers: {
        location: "/"
      }
    }
  );
}