import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <div class="header">
        <a href="/wordcsr">Client Side</a>
        <a href="/wordssr">Server Side</a>
      </div>
      <h1>My Dictionary</h1>
      <Component />
    </div>
  );
}
