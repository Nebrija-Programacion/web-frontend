import { FunctionComponent } from "preact";
import { CartItem } from "../types.ts";
import DecreaseProduct from "../islands/DecreaseProduct.tsx";
import AddProduct from "../islands/AddProduct.tsx";
import { useEffect, useState } from "preact/hooks";
import { cartNumber } from "../signals/cartNumber.ts";
import CheckOutButton from "../islands/CheckOutButton.tsx";

type Props = {
  cart: CartItem[];
};

const Cart: FunctionComponent<Props> = ({ cart }) => {
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
        <CheckOutButton />
      </div>
    </>
  );
};

export default Cart;
