import { FreshContext } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default async function Layout(req: Request, ctx: FreshContext) {
  // do something with state here
  //const data = await loadData();

  return (
    <div className="page-container">
      <Header userName={`${ctx.state.name || "unknown"}`} />
      <ctx.Component />
    </div>
  );
}
