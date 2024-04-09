import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { CartItem } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Pages } from "../types.ts";

type MenuProps = {
  cart: Signal<CartItem[]>;
  page: Signal<Pages>;
};

const Menu: FunctionComponent<MenuProps> = ({ cart, page }) => {
  return (
    <div class="menu">
      <div
        class={`${page.value === Pages.SHOP ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.SHOP;
        }}
      >
        Comprar
      </div>
      <div
        class={`${page.value === Pages.CART ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.CART;
        }}
      >
        Carro de la compra{" "}
        <div class="quantity">
          {IS_BROWSER &&
            cart.value.reduce((acc, item) => acc + item.quantity, 0)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
