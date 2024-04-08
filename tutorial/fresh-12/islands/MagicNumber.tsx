import { FunctionComponent } from "preact";
import Button from "../components/Button.tsx";
import Viewer from "../components/Viewer.tsx";
import { useSignal } from "@preact/signals";
const MagicNumber: FunctionComponent<{ number: number }> = ({ number }) => {
  const num = useSignal<number>(number);
  return (
    <>
      <Button num={num} />
      <Viewer num={num} />
    </>
  );
};

export default MagicNumber;
