import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string, {dni: string}> = {
  GET: (_req: Request, ctx: FreshContext<{dni: string}>) => {
    const dni = ctx.state.dni;
    console.log("El dni es: ", dni);  
    return ctx.render(dni);
  }
}

const Page  = (props: PageProps<string>) => (<div>Estoy aqui {props.data}</div>)

export default Page;