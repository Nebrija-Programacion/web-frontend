import { useEffect, useState } from "preact/hooks";
import { country } from "../signals/Country.ts";
import { city } from "../signals/City.ts";

const CitySelect = () => {
  const [cities, setCities] = useState<string[]>([]);
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
      if (!response.ok) {
        console.error("Failed to fetch cities");
        setCities([]);
      }
      const data = await response.json();
      setCities(data.data);
      city.value = data.data[0];
    };
    if (country.value !== "") {
      setCities([]);
      fetchCities(country.value);
    }
  }, [country.value]);

  if (cities.length > 0)
    return (
      <>
        <label for="city">City</label>
        <select
          value={city}
          id="city"
          name="city"
          onChange={(e) => (city.value = e.currentTarget.value)}
          required
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </>
    );
  else return null;
};

export default CitySelect;
