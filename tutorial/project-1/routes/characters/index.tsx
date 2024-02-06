// redirect to /characters/1

import { Handlers } from "$fresh/server.ts";

export const handler = () => {
  return new Response("", {
    status: 307,
    headers: { Location: "/characters/1" },
  });
};
