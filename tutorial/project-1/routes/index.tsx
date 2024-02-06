// redirect to /characters/1
export const handler = () => {
  return new Response("", {
    status: 307,
    headers: { Location: "/characters/1" },
  });
};
