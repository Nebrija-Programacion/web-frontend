import { FreshContext } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Menu from "../components/Menu.tsx";

const Layout = async (req: Request, ctx: FreshContext) => {
  const Component = ctx.Component;
  const route = ctx.route;
  // last after /
  const page = route.split("/").pop();
  // if page is empty, it means we are at the root
  const selected = page === "" ? "List" : "Add";
  return (
    <>
      <Menu selected={selected} />
      <Component />
      <Footer />
    </>
  );
};

export default Layout;
