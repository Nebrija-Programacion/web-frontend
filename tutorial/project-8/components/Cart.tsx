import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { CartItem } from "../types.ts";
import { Product } from "../types.ts";
import { Pages } from "../types.ts";
type Props = {
  cart: Signal<CartItem[]>;
  page: Signal<Pages>;
};

const Cart: FunctionComponent<Props> = ({ cart, page }) => {
  const increaseProduct = (product: Product, cart: CartItem[]) => {
    const newCart = [...cart];
    const found = newCart.find((item) => item.product.id === product.id);
    if (found) {
      found.quantity++;
    }
    return newCart;
  };
  const decreaseProduct = (product: Product, cart: CartItem[]) => {
    const newCart = [...cart];
    const found = newCart.find((item) => item.product.id === product.id);
    if (found) {
      found.quantity--;
      if (found.quantity === 0) {
        newCart.splice(newCart.indexOf(found), 1);
      }
    }
    return newCart;
  };

  return (
    <>
      <div class="products">
        <h1>Cart</h1>
        {cart.value.map((item) => (
          <div class="item" key={item.product.id}>
            <span class="name">{item.product.name}</span>
            <span class="price">{item.product.price}€</span>
            <img src={item.product.image} alt={item.product.name} />
            <span class="description">{item.product.description}</span>
            <span
              class="remove"
              onClick={() => {
                cart.value = decreaseProduct(item.product, cart.value);
              }}
            >
              -
            </span>
            <span class="quantity">{item.quantity}</span>
            <span
              class="add"
              onClick={() => {
                cart.value = increaseProduct(item.product, cart.value);
              }}
            >
              +
            </span>
          </div>
        ))}
        <div class="total">
          <div class="total-text">Total:</div>
          <div class="total-price">
            {
              // fix to to decimals

              cart.value
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )
                .toFixed(2)
            }
            €
          </div>
        </div>
        <button
          class="checkout-button"
          onClick={() => {
            page.value = Pages.CHECKOUT;
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
