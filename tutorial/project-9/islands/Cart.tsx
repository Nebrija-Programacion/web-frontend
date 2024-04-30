import { FunctionComponent } from "preact";
import { CartItem } from "../types.ts";
import DecreaseProduct from "./DecreaseProduct.tsx";
import AddProduct from "./AddProduct.tsx";
import { useEffect, useState } from "preact/hooks";
import { cartNumber } from "../signals/cartNumber.ts";

const Cart: FunctionComponent = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // load cart from cookie
    const cookies = document.cookie.split("; ");
    console.log(cookies);
    const cartCookie = cookies.find((cookie) => cookie.startsWith("cart="));

    if (cartCookie) {
      setCart(JSON.parse(cartCookie.split("=")[1]));
    }
  }, [cartNumber.value]);

  return (
    <>
      <div class="products">
        <h1>Cart</h1>
        {cart.map((item) => (
          <div class="item" key={item.product.id}>
            <span class="name">{item.product.name}</span>
            <span class="price">{item.product.price}€</span>
            <img src={item.product.image} alt={item.product.name} />
            <span class="description">{item.product.description}</span>
            <DecreaseProduct product={item.product} />
            <span class="quantity">{item.quantity}</span>
            <AddProduct product={item.product} />
          </div>
        ))}
        <div class="total">
          <div class="total-text">Total:</div>
          <div class="total-price">
            {
              // fix to to decimals

              cart
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
            // got to /checkout page
            window.location.href = "/checkout";
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
