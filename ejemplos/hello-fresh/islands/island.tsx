import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

const Island = () => {
  const number = useSignal(0);
  console.log("island.tsx");
  console.log(number.value);
  return (
    <div>
      <button onClick={() => number.value++}>Click me</button>
      {number}
    </div>
  );
};

export default Island;
