import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Product } from "../../types.ts";
import Products from "../../components/Products.tsx";

export const handler: Handlers = {
  GET: async (
    _req: Request,
    ctx: FreshContext<unknown, { products: Product[] }>
  ) => {
    const { product } = ctx.params;
    const response = await fetch(
      `https://shop-products.deno.dev/products/${product}`
    );
    if (!response.ok) {
      const headers = new Headers({
        location: "/products/breakfast",
      });
      return new Response(null, {
        status: 302,
        headers,
      });
    }

    const products = await response.json();
    return ctx.render({ products });
  },
};

const Page = (props: PageProps<{ products: Product[] }>) => (
  <Products products={props.data.products} />
);

export default Page;
