import { FunctionComponent } from "preact";
import { CartItem, Product } from "../types.ts";
import { cartNumber } from "../signals/cartNumber.ts";

type Props = {
  product: Product;
};

const DecreaseProduct: FunctionComponent<Props> = (props) => {
  const onDecreaseProduct = (product: Product) => {
    // read cart cookie
    const cookies = document.cookie.split("; ");
    const cartCookie = cookies.find((cookie) => cookie.startsWith("cart="));
    if (!cartCookie) {
      return;
    } else {
      const cart: CartItem[] = JSON.parse(cartCookie.split("=")[1]);
      const found = cart.find((item) => item.product.id === product.id);
      if (found) {
        found.quantity--;
        if (found.quantity === 0) {
          cart.splice(cart.indexOf(found), 1);
        }
        document.cookie = `cart=${JSON.stringify(cart)}; path=/`; // we must set the path to / so the cookie is available in all pages
        cartNumber.value--;
      }
    }
  };

  return (
    <span class="remove" onClick={(e) => onDecreaseProduct(props.product)}>
      -
    </span>
  );
};

export default DecreaseProduct;
