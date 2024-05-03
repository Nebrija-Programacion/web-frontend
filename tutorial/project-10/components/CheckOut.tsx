import { FunctionalComponent } from "preact";
import { Country } from "../types.ts";
import CountrySelect from "../islands/CountrySelect.tsx";
import CitySelect from "../islands/CitySelect.tsx";
import CartPrice from "../islands/CartPrice.tsx";

type Props = {
  countries: Country[];
};

const CheckOut: FunctionalComponent<Props> = ({ countries }) => {
  return (
    <div class="checkout">
      <h1>Checkout</h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label for="address">Address</label>
        <input type="text" id="address" name="address" required />
        <CountrySelect countries={countries} />
        <CitySelect />

        <label for="payment">Payment method</label>
        <select id="payment" name="payment" required>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
        </select>
        <CartPrice />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckOut;
