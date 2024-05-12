import { FunctionalComponent } from "preact";
import { Country } from "../types.ts";
import { country } from "../signals/Country.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "https://esm.sh/v128/preact@10.19.6/hooks/src/index.js";

type Props = {
  countries: Country[];
};

const CountrySelect: FunctionalComponent<Props> = ({ countries }) => {
  return (
    <>
      {countries.length > 0 && (
        <>
          <label for="country">Country</label>
          <select
            value={country.value !== "" ? country.value : countries[0].code}
            id="country"
            name="country"
            onChange={(e) => (country.value = e.currentTarget.value)}
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
    </>
  );
};

export default CountrySelect;
