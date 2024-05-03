import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Cart from "../components/Cart.tsx";
import { getCookies } from "$std/http/cookie.ts";
import { CartItem } from "../types.ts";

type Data = {
  cart: CartItem[];
};

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
    const cookies = getCookies(req.headers);
    const cart = JSON.parse(cookies.cart);
    return ctx.render({ cart });
  },
};

const Page = (props: PageProps<Data>) => {
  const cart = props.data.cart;
  return <Cart cart={cart} />;
};

export default Page;
