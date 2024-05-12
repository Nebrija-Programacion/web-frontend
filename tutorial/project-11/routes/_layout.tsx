import { PageProps } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
      <Menu />
      <Component />
    </>
  );
}
