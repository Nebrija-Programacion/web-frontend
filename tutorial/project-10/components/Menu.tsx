import { FunctionComponent } from "preact";
import NumCarrito from "../islands/NumCarrito.tsx";

const Menu: FunctionComponent = () => {
  return (
    <div class="menu">
      <a href="/products/breakfast">Breakfasts</a>
      <a href="/products/lunch">Luncheons</a>
      <a href="/cart">
        Shopping cart <NumCarrito />
      </a>
    </div>
  );
};

export default Menu;
