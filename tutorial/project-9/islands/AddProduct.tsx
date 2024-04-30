import { FunctionComponent } from "preact";
import { CartItem, Product } from "../types.ts";
import { cartNumber } from "../signals/cartNumber.ts";

type Props = {
  product: Product;
};

const AddProduct: FunctionComponent<Props> = (props) => {
  const onAddProduct = (product: Product) => {
    // read cart cookie
    const cookies = document.cookie.split("; ");
    const cartCookie = cookies.find((cookie) => cookie.startsWith("cart="));
    if (!cartCookie) {
      document.cookie = `cart=${JSON.stringify([
        { product, quantity: 1 },
      ])}; path=/`; // we must set the path to / so the cookie is available in all pages
    } else {
      const cart: CartItem[] = JSON.parse(cartCookie.split("=")[1]);
      const found = cart.find((item) => item.product.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        cart.push({ product, quantity: 1 });
      }
      document.cookie = `cart=${JSON.stringify(cart)}; path=/`; // we must set the path to / so the cookie is available in all pages
    }
    cartNumber.value++;
  };

  return (
    <span class="add" onClick={(e) => onAddProduct(props.product)}>
      +
    </span>
  );
};

export default AddProduct;
