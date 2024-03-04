import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type CounterProps = {
  initialValue: number;
};

const Counter: FunctionComponent<CounterProps> = (props) => {
  const [number, setNumber] = useState<number>(props.initialValue);
  return (
    <>
      <h1>{number}</h1>
      <button disabled={number === 0} onClick={() => setNumber(number - 1)}>
        Restarle 1
      </button>
      {number === 0 && <h2>Has llegado</h2>}
    </>
  );
};

export default Counter;
