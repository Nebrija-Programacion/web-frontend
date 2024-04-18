import { Signal } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { CartItem, Pages } from "../types.ts";

type Props = {
  cart: Signal<CartItem[]>;
  page: Signal<Pages>;
};

const CheckOut: FunctionalComponent<Props> = ({ cart, page }) => {
  const totalPrice = cart.value.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  // form asking for name, address, payment method
  return (
    <div class="checkout">
      <h1>Checkout</h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label for="address">Address</label>
        <input type="text" id="address" name="address" required />
        <label for="phone">Country</label>
        <select id="country" name="country" required>
          <option value="spain">Spain</option>
          <option value="france">France</option>
          <option value="italy">Italy</option>
          <option value="germany">Germany</option>
        </select>
        Get countries with this API{" "}
        <a href="https://api.first.org/v1/get-countries">
          https://api.first.org/v1/get-countries
        </a>
        <label for="city">City</label>
        <select id="city" name="city" required>
          <option value="madrid">Madrid</option>
          <option value="paris">Paris</option>
          <option value="rome">Rome</option>
          <option value="berlin">Berlin</option>
        </select>
        Get cities for a country with this API{" "}
        <a href="https://documenter.getpostman.com/view/1134062/T1LJjU52#2e131a94-a28e-4cfe-95fe-d10c0e40eae7">
          https://documenter.getpostman.com/
        </a>
        <label for="payment">Payment method</label>
        <select id="payment" name="payment" required>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
        </select>
        <div class="total">{totalPrice.toFixed(2)}€</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckOut;
