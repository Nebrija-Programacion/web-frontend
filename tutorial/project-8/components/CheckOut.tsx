import { Signal } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { CartItem, Pages } from "../types.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
  cart: Signal<CartItem[]>;
  page: Signal<Pages>;
};

type Country = {
  name: string;
  code: string;
};

type CountryResponse = {
  data: { [key: string]: { country: string } };
};

const CheckOut: FunctionalComponent<Props> = ({ cart, page }) => {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.first.org/data/v1/countries?region=europe")
      .then((response) => response.json())
      .then((data) => {
        const ctries = Object.keys(data.data).map((key) => ({
          name: data.data[key].country,
          code: key,
        }));
        setCountries(ctries);
        setCountry(ctries[0].code);
      });
  }, []);

  useEffect(() => {
    const fetchCities = async (countryISO: string) => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ iso2: countryISO }),
        }
      );
      const data = await response.json();
      setCities(data.data);
      setCity(data.data[0]);
    };
    if (country !== "") fetchCities(country);
  }, [country]);

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
        {countries.length > 0 && (
          <>
            <label for="country">Country</label>
            <select
              value={country}
              id="country"
              name="country"
              onChange={(e) => setCountry(e.currentTarget.value)}
              required
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </>
        )}
        {cities.length > 0 && (
          <>
            <label for="city">City</label>
            <select
              value={city}
              id="city"
              name="city"
              onChange={(e) => setCity(e.currentTarget.value)}
              required
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </>
        )}

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
