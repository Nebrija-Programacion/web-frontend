import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type State = {
  name: string;
};

export const handler: Handlers = {
  GET: (_req: Request, ctx: FreshContext<unknown, State>) => {
    const name = ctx.state.name;
    return ctx.render({ name });
  },
};

const Page = (props: PageProps<{ name: string }>) => (
  <div>Hola amigo {props.data.name}</div>
);

export default Page;
