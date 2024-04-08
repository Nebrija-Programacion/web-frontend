import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Viewer: FunctionComponent<{ num: Signal<number> }> = ({ num }) => {
  if (IS_BROWSER) return <div>{num.value}</div>;
  else return null;
};

export default Viewer;
