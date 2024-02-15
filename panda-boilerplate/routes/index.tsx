import { css } from "$/deps.ts";

const styles = css({
  backgroundColor: "blue",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  textAlign: "center",
  textTransform: "uppercase",
});

export default function Home() {
  return <div className={styles}>Hello world</div>;
}
