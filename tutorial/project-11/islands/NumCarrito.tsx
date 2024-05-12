import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";
import { cartNumber } from "../signals/cartNumber.ts";
import { CartItem } from "../types.ts";

const NumCarrito = () => {
  useEffect(() => {
    // read cart cookie and set cartNumber

    const cookies = document.cookie.split("; ");
    const cartCookie = cookies.find((cookie) => cookie.startsWith("cart="));
    if (cartCookie) {
      const cart: CartItem[] = JSON.parse(cartCookie.split("=")[1]);
      cartNumber.value = cart.reduce((acc, item) => acc + item.quantity, 0);
    } else {
      cartNumber.value = 0;
    }
  }, []);

  return <div class="quantity">{IS_BROWSER ? cartNumber.value : ""}</div>;
};
export default NumCarrito;
