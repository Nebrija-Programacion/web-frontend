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
        class={`${page.value === Pages.BREAKFAST ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.BREAKFAST;
        }}
      >
        Breakfasts
      </div>
      <div
        class={`${page.value === Pages.LUNCH ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.LUNCH;
        }}
      >
        Luncheons
      </div>
      <div
        class={`${page.value === Pages.CART ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.CART;
        }}
      >
        Shopping cart{" "}
        <div class="quantity">
          {IS_BROWSER &&
            cart.value.reduce((acc, item) => acc + item.quantity, 0)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
