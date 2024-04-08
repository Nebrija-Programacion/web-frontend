import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";

const Button: FunctionComponent<{ num: Signal<number> }> = ({ num }) => {
  return <button onClick={(e) => num.value = num.value + 1}>Incrementar
  </button>;
};

export default Button;
