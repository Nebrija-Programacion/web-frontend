import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: () => {
    const headers = new Headers({
      location: "/products/breakfast",
    });
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
