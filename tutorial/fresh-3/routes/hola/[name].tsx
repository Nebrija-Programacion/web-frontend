import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = {
  name: string;
};

export const handler: Handlers = {
  GET: (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { name } = ctx.params;
    return ctx.render({ name });
  },
};

const Page = (props: PageProps<Data>) => {
  const { name } = props.data;
  return <div>Hola {name}</div>;
};

export default Page;
