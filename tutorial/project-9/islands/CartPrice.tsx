import { useEffect, useState } from "preact/hooks";
import { cartNumber } from "../signals/cartNumber.ts";

const CartPrice = () => {
  const [cartPrice, setCartPrice] = useState<number>(0);
  useEffect(() => {
    // read cookie and compute cart price
    const cookies = document.cookie.split("; ");
    const cartCookie = cookies.find((cookie) => cookie.startsWith("cart="));
    if (cartCookie) {
      const cart = JSON.parse(cartCookie.split("=")[1]);
      setCartPrice(
        cart.reduce(
          (
            acc: number,
            item: { product: { price: number }; quantity: number }
          ) => acc + item.product.price * item.quantity,
          0
        )
      );
    } else {
      setCartPrice(0);
    }
  }, [cartNumber.value]);

  return <div class="total">{cartPrice.toFixed(2)}€</div>;
};

export default CartPrice;
