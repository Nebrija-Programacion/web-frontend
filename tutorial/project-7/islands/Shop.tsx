import { useSignal } from "@preact/signals";
import Products from "../components/Products.tsx";
import Menu from "../components/Menu.tsx";
import { CartItem, Pages } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Cart from "../components/Cart.tsx";

const Shop = () => {
  const cart = useSignal<CartItem[]>([]);
  const page = useSignal<Pages>(Pages.SHOP);
  return (
    <>
      <Menu cart={cart} page={page} />
      {!IS_BROWSER && <Products cart={cart} />}
      {IS_BROWSER && page.value === Pages.SHOP && <Products cart={cart} />}
      {IS_BROWSER && page.value === Pages.CART && <Cart cart={cart} />}
    </>
  );
};

export default Shop;
